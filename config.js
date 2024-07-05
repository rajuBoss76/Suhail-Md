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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923314927710";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "9231xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_26_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc0LFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0LFxuICAgICAgICA1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NixcbiAgICAgICAgMTM5LFxuICAgICAgICA3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICA3NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDkxLFxuICAgICAgICA1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MSxcbiAgICAgICAgODksXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjExLFxuICAgICAgICA0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzksXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEsXG4gICAgICAgIDcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MyxcbiAgICAgICAgMjExLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODUsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicWZXWkhMUzR6SFZkVmVTeDJEU09HMWZ0TE9aODl2V0F2d0NmdXlkTk1rOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODk3NnZmSDZTbktfWF9WdlFTMEhyUVwiLFxuICBcInBob25lSWRcIjogXCJjNTkxZTlhNS1hNmQ2LTQyMjAtYmUxNS0wNjA5MjM5MGZlNzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgMTU0LFxuICAgICAgMTcsXG4gICAgICAxNTIsXG4gICAgICAyNTIsXG4gICAgICA0NixcbiAgICAgIDU3LFxuICAgICAgODQsXG4gICAgICA0MCxcbiAgICAgIDEyNCxcbiAgICAgIDQzLFxuICAgICAgMTEwLFxuICAgICAgMTA0LFxuICAgICAgMjcsXG4gICAgICA2MSxcbiAgICAgIDE4NixcbiAgICAgIDcwLFxuICAgICAgMTQzLFxuICAgICAgMjE3LFxuICAgICAgMjUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcsXG4gICAgICAzLFxuICAgICAgMTQyLFxuICAgICAgMTExLFxuICAgICAgMyxcbiAgICAgIDI1NCxcbiAgICAgIDE2OCxcbiAgICAgIDEwOSxcbiAgICAgIDE4NyxcbiAgICAgIDIzNSxcbiAgICAgIDIxMCxcbiAgICAgIDEwNSxcbiAgICAgIDI5LFxuICAgICAgMTcsXG4gICAgICAyMTcsXG4gICAgICAyMDMsXG4gICAgICAyMjUsXG4gICAgICAyMjYsXG4gICAgICAyMjksXG4gICAgICAxMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRVdSREU1UkVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNzcxMDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTgxODM0ODkzMTA4MzY6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUc3dGswUTVPdWR0QVlZQkNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGUGFrL0FNRTkzTXVIOWo0bE5Sdy9WWGZzRklxOFFwQWtnOFFFQlRzQ0dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNLRWpnbU1BVGtwejN3K1VFaXFxNnZUS1RKQ0RzWlhzSHMzOCtzTVZDWm1YdUg3bmJxZVRJM1dwejY5b2w0a010NUV5aHNEYUFLM0NmbDkrcFNaNEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlIwTEVzR1RwTkc1bW1aaDE0U1ZkaDN0NUFEMjR6RllZQXhIYUZuak5QcmNnTGxLcHJ0WEx4TjJUT2FWTEJ4Y2lyTU9DckVaSlBkci9ETW5oVGdkZGhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNzcxMDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMTUzNTc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVg5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNWDkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2SkFYZWhKZHFLWGx3S0xZZWY5WWFPck9oalRPYUNaZzhVbzdwSm83SzhrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MjM3Mjk5MyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTk0MTYxMjk4MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "R",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Raju",
  packname: process.env.PACK_NAME || "Raju",
  botname : process.env.BOT_NAME  || "Raju King 👑",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
