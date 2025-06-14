const config = require('../config');
const { cmd, commands } = require('../command');
const fs = require('fs');

const prefix = config.PREFIX || ".";
const mode = config.MODE || "public";

cmd({
    pattern: "menu",
    desc: "Get command list",
    react: "🐗",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        let menu = {
            ai: '',
            download: '',
            fun: '',
            owner: '',
            group: '',
            privacy: '',
            search: '',
            system: '',
            main: '',
            sticker: '',
            other: '',
            nsfw: '',
            anime: '', 
            utility: '',
            tools: '',
            logo: '',
           settings: '',
        };

        function formatUptime(seconds) {
            const days = Math.floor(seconds / (24 * 60 * 60));
            seconds %= 24 * 60 * 60;
            const hours = Math.floor(seconds / (60 * 60));
            seconds %= 60 * 60;
            const minutes = Math.floor(seconds / 60);
            seconds = Math.floor(seconds % 60);
            return `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }

        const uptime = formatUptime(process.uptime());

        for (let cmdObj of commands) {
            if (cmdObj.pattern && !cmdObj.dontAddCommandList) {
                if (menu[cmdObj.category] !== undefined) {
                    menu[cmdObj.category] += `⤷ ${prefix}${cmdObj.pattern}\n`;
                }
            }
        }

        let madeMenu = `╔════❖ 『 *${config.BOT_NAME} MENU* 』 ❖════╗
║  ⚙️ *Bot Info*
║  ━━━━━━━━━━━
║  🧑‍💼 Owner   : ${config.OWNER_NAME}
║  📶 Mode    : ${mode}
║  🔠 Prefix  : ${prefix}
║  ⚡ Version : 3.0.0 Beta
║  ⏱ Uptime  : ${uptime}
╚═════════════════════════╝

╔═══『 📌 MAIN MENU 📌 』═══╗
${menu.main || '⤷ No commands'}

╔═══『 🧠 AI MENU 🧠 』═══╗
${menu.ai || '⤷ No commands'}

╔═══『 📥 DOWNLOAD MENU 📥 』═══╗
${menu.download || '⤷ No commands'}

╔═══『 🎭 FUN MENU 🎭 』═══╗
${menu.fun || '⤷ No commands'}

╔═══『 👑 OWNER MENU 👑 』═══╗
${menu.owner || '⤷ No commands'}

╔═══『 👥 GROUP MENU 👥 』═══╗
${menu.group || '⤷ No commands'}

╔═══『 🔐 PRIVACY MENU 🔐 』═══╗
${menu.privacy || '⤷ No commands'}

╔═══『 🌐 SEARCH MENU 🌐 』═══╗
${menu.search || '⤷ No commands'}

╔═══『 🖥 SYSTEM MENU 🖥 』═══╗
${menu.system || '⤷ No commands'}

╔═══『 🖼 LOGO MENU 🖼 』═══╗
${menu.logo || '⤷ No commands'}

╔═══『 🎨 STICKER MENU 🎨 』═══╗
${menu.sticker || '⤷ No commands'}

╔═══『 🛠 TOOLS MENU 🛠 』═══╗
${menu.tools || '⤷ No commands'}

╔═══『 ⚙️🔩 SETTINGS MENU ⚙️🔩 』═══╗
${menu.settings || '⤷ No commands'}

╔═══『 🌟 OTHER MENU 🌟 』═══╗
${menu.other || '⤷ No commands'}

╔═══『 🔞 NSFW MENU 🔞 』═══╗
${menu.nsfw || '⤷ No commands'}

╔═══『 🍒 FUN MENU 🍒 』═══╗
${menu.fun || '⤷ No commands'}

╔═══『 🙅 ANIME MENU 🙅 』═══╗
${menu.anime || '⤷ No commands'}

╔═══『 🧩 UTILITY MENU 🧩 』═══╗
${menu.utility || '⤷ No commands'}

╚═══❖🍒 WATSON FOURPENCE 🍒❖═══╝
`;

        await conn.sendMessage(from, {
            image: { url: config.ALIVE_IMG },
            caption: madeMenu
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
