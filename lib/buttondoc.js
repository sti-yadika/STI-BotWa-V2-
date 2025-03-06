// Kemii Cantik - Zippo
// Min, 23 Jun - 22.30
const fs = require('fs')
const { generateWAMessageFromContent, prepareWAMessageMedia, proto} = require("@whiskeysockets/baileys");
const chalk = require('chalk')
const fetch = require("node-fetch")
class Buttons {
    constructor() {
    	this._title = "";
	    this._subtitle = "";
        this._body = "";
        this._footer = "";
        this._beton = [];
        this._data;
        this._contextInfo = {};
        this._currentSelectionIndex = -1;
        this._currentSectionIndex = -1;
    }

    setVideo(path, options = {}) {
    	if(!path) return new Error("Url or buffer needed");
    	Buffer.isBuffer(path) ? this._data = { video: path, ...options } : this._data = { video: { url: path }, ...options };
        return this;
    }
    
    setImage(path, options = {}) {
    	if(!path) return new Error("Url or buffer needed");
    	Buffer.isBuffer(path) ? this._data = { image: path, ...options } : this._data = { image: { url: path }, ...options };
        return this;
    }
    
    setDocument(path, options = {}) {
    	if(!path) return new Error("Url or buffer needed");
    	Buffer.isBuffer(path) ? this._data = { document: path, ...options } : this._data = { document: { url: path }, ...options };
        return this;
    }
    
    setTitle(title) {
    	this._title = title;
	    return this;
    }
    
    setSubtitle(subtitle) {
    	this._subtitle = subtitle;
	    return this;
    }

    setBody(body) {
        this._body = body;
        return this;
    }

    setFooter(footer) {
        this._footer = footer;
        return this;
    }

    makeRow(header = "", title = "", description = "", id = "") {
        if (this._currentSelectionIndex === -1 || this._currentSectionIndex === -1) {
            throw new Error("You need to create a selection and a section first");
        }
        const buttonParams = JSON.parse(this._beton[this._currentSelectionIndex].buttonParamsJson);
        buttonParams.sections[this._currentSectionIndex].rows.push({ header, title, description, id });
        this._beton[this._currentSelectionIndex].buttonParamsJson = JSON.stringify(buttonParams);
        return this;
    }

    makeSections(title = "", highlight_label = "") {
        if (this._currentSelectionIndex === -1) {
            throw new Error("You need to create a selection first");
        }
        const buttonParams = JSON.parse(this._beton[this._currentSelectionIndex].buttonParamsJson);
        buttonParams.sections.push({ title, highlight_label, rows: [] });
        this._currentSectionIndex = buttonParams.sections.length - 1;
        this._beton[this._currentSelectionIndex].buttonParamsJson = JSON.stringify(buttonParams);
        return this;
    }

    addSelection(title) {
        this._beton.push({ name: "single_select", buttonParamsJson: JSON.stringify({ title, sections: [] }) });
        this._currentSelectionIndex = this._beton.length - 1;
        this._currentSectionIndex = -1;
        return this;
    }

    addReply(display_text = "", id = "") {
        this._beton.push({ name: "quick_reply", buttonParamsJson: JSON.stringify({ display_text, id }) });
        return this;
    }
    
    addCall(display_text = "", id = "") {
        this._beton.push({
            name: "cta_call",
            buttonParamsJson: JSON.stringify({
                display_text, 
                id
            })
        });
        return this;
    }
    
    addReminder(display_text = "", id = "") {
        this._beton.push({
            name: "cta_reminder",
            buttonParamsJson: JSON.stringify({
                display_text, 
                id
            })
        });
        return this;
    }
    
    addCancelReminder(display_text = "", id = "") {
        this._beton.push({
            name: "cta_cancel_reminder",
            buttonParamsJson: JSON.stringify({
                display_text, 
                id
            })
        });
        return this;
    }
    
    addAddress(display_text = "", id = "") {
        this._beton.push({
            name: "address_message",
            buttonParamsJson: JSON.stringify({
                display_text, 
                id
            })
        });
        return this;
    }
    
    addLocation() {
        this._beton.push({
            name: "send_location",
            buttonParamsJson: ""
        });
        return this;
    }

    addUrl(display_text = "", url = "", merchant_url = "") {
        this._beton.push({
            name: "cta_url",
            buttonParamsJson: JSON.stringify({
                display_text, 
                url,
                merchant_url
            })
        });
        return this;
    }

    addCopy(display_text = "", copy_code = "", id = "") {
        this._beton.push({
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
                display_text,
                copy_code,
                id
                }) 
        });
        return this;
    }

async run(jid, fauzialifatah, quoted = {}) {
    const filePath = './lib/media/NDoc.jpg';
    
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        throw new Error('File not found: ' + filePath);
    }

    // Read the file and handle potential encoding issues
    let fileBuffer;
    try {
        fileBuffer = fs.readFileSync(filePath);
    } catch (error) {
        throw new Error('Error reading file: ' + error.message);
    }

    // Prepare media for sending
    const media = await prepareWAMessageMedia({
        document: fileBuffer,
        fileName: 'tes',
        mimetype: 'image/jpeg', // Ensure the correct mimetype
        jpegThumbnail: fileBuffer // Use the same file for thumbnail
    }, { upload: fauzialifatah.waUploadToServer });

    const message = {
        body: proto.Message.InteractiveMessage.Body.create({ text: this._body }),
        footer: proto.Message.InteractiveMessage.Footer.create({ text: this._footer }),
        header: proto.Message.InteractiveMessage.Header.create({
            title: this._title,
            subtitle: this._subtitle,
            hasMediaAttachment: true,
            ...media
        })
    };

    const msg = generateWAMessageFromContent(jid, {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    ...message,
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0&mms3=true",
                            mimetype: "image/jpeg", // Ensure the correct mimetype
                            fileSha256: "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
                            jpegThumbnail: fileBuffer, // Use the file buffer for thumbnail
                            fileLength: fileBuffer.length, // Get the actual file length
                            mediaKey: "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
                            fileName: 'ギ A-League',
                            directPath: "/v/t62.7119-24/30129597_829817659174206_6300413901737393729_n.enc?ccb=11-4&oh=01_Q5AaIA5MAdyMQOjp8l42SnRy_8qjz9O8JH8vgPee1nIdko51&oe=66595EB9&_nc_sid=5e03e0",
                            contactVcard: true,
                            mediaKeyTimestamp: "1658703206"
                        }
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: this._beton,
                    }),
                    contextInfo: {
                        mentionedJid: quoted.sender ? [quoted.sender] : [],
                        forwardingScore: 999999,
                        isForwarded: true,
                        businessMessageForwardInfo: {
                            businessOwnerJid: fauzialifatah.decodeJid(fauzialifatah.user.id)
                        },
                        externalAdReply: {
                            showAdAttribution: true,
                            title: "© A-League For Bug",
                            body: "Bug Of The WhatsApp",
                            thumbnailUrl: "https://files.catbox.moe/o396o5.jpg",
                            sourceUrl: 'https://api.kyuurzy.tech',
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                })
            }
        }
    }, { quoted });

    await fauzialifatah.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
    return msg;
}
}

module.exports = Buttons

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})
