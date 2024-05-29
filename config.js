const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348120750062";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_52_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxODIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDczLFxuICAgICAgICA3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAzLFxuICAgICAgICA3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI2LFxuICAgICAgICA2MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQxLFxuICAgICAgICA0MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMixcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA0LFxuICAgICAgICA1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOVEzTlRKL1JNUHZ5bWoycXJnRThLdWxRc0t5eFZSamlUMnRmQ2I2SzBmVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTIwNzUwMDYyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RUM5MzhGMjE4RTIwMTVFMDhCMTYwMkI1QTYxQ0I0NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTcwMTU5NzdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUzVyRXJDV05TWWlSeE1Rc19MTXN3d1wiLFxuICBcInBob25lSWRcIjogXCI3NDAyYThiMC04NGYwLTQxYjEtYThlNy0yYzBmNDlhZmQxZTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgNDcsXG4gICAgICAxMTEsXG4gICAgICA1NCxcbiAgICAgIDE4OSxcbiAgICAgIDI0NSxcbiAgICAgIDg4LFxuICAgICAgMzAsXG4gICAgICA5MCxcbiAgICAgIDYwLFxuICAgICAgMTAxLFxuICAgICAgMTUsXG4gICAgICAxODEsXG4gICAgICAyMzIsXG4gICAgICA3MSxcbiAgICAgIDE2NixcbiAgICAgIDQyLFxuICAgICAgMjQ2LFxuICAgICAgMjM3LFxuICAgICAgODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMTMzLFxuICAgICAgOCxcbiAgICAgIDE0MSxcbiAgICAgIDQ2LFxuICAgICAgOTUsXG4gICAgICA2LFxuICAgICAgMTIzLFxuICAgICAgMjUyLFxuICAgICAgMTE5LFxuICAgICAgNDgsXG4gICAgICAxOTYsXG4gICAgICA0MCxcbiAgICAgIDEwOSxcbiAgICAgIDEyMSxcbiAgICAgIDE2LFxuICAgICAgMjA5LFxuICAgICAgMTQ2LFxuICAgICAgMTQ3LFxuICAgICAgMTU5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhBRDFTWlNKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTIwNzUwMDYyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBeWFuZmUncyBBcnRpc3RyeVwiLFxuICAgIFwibGlkXCI6IFwiMzU2Mzk5MjM4NTEyNzI6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMam80RDBRbnF2ZXNnWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldKZ1k4S3hjcHN6b3VYSm4xUitRaWxrWEh2NWIweEdRM0lac0FvS3JEM1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ2NORzVKOUVuV0lWZy9JVHJnVFk0MERLOWJ1ZDZmQVJ1RE5QYjhlUFlOSTdLeVd2ZTN5anV2MnZlTW55cURYTnVwcnY5dEtvV0F6aGlod2dZZHRBRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSUNtN1IycEQ2UUIyYUlsVXZYSE9CUEhiTnlsZ3BSZUhhMVJLWEhBc2NxL3VldE9mQmo3cFI2TDM3eWdtZUpmWHpzR2k5RzVlMExZK24vcHZQRGlPakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyMDc1MDA2MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MDE1OTcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRnlFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGeUUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxcXZoMDJhUVRraTRFVkJ5RTlGaG1QZXdJamluU2Q1aXlDUWIzMnBDMlBzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyOTUxMjUwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3MDE1OTc2MTgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
