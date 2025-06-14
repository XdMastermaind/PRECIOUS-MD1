const config = require('../config');
const { cmd } = require('../command');
const moment = require('moment-timezone');
const axios = require('axios'); // Install axios if not already: npm install axios

let autobioInterval = null;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

async function getWeather() {
  try {
    const apiKey = '2d61a72574c11c4f36173b627f8cb177'; // Replace with your OpenWeatherMap API key
    const city = 'Harare';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    const res = await axios.get(url);
    const data = res.data;
    const temp = data.main.temp;
    const desc = data.weather[0].description;

    return `${temp}°C, ${desc}`;
  } catch (err) {
    console.error('Weather fetch error:', err);
    return 'Weather info unavailable';
  }
}

function startAutoBio(conn) {
  autobioInterval = setInterval(async () => {
    const time = moment().tz("Africa/Harare").format("HH:mm:ss");
    const date = moment().tz("Africa/Harare").format("YYYY-MM-DD");
    const uptime = clockString(process.uptime() * 1000);

    const battery = conn?.battery ?? { value: 'N/A', isCharging: false };
    const batteryText = battery.value !== 'N/A' 
      ? `${battery.value}% ${battery.isCharging ? '⚡ Charging' : ''}` 
      : 'Battery info unavailable';

    const weather = await getWeather();

    const bio = `🙍 PRECIOUS-MD | 《WATSON FOURPENCE 2025》\n📅 ${date} | 🕒 ${time}\n⚡ Uptime: ${uptime}\n🔋 Battery: ${batteryText}\n⛅ Weather: ${weather}\n👑 Owner: wa.me/${config.ownerNumber}`;
    
    await conn.updateProfileStatus(bio).catch(_ => {});
  }, 60 * 1000); // Update every 60 seconds
}

function stopAutoBio() {
  if (autobioInterval) clearInterval(autobioInterval);
}

cmd({
  pattern: 'autobio',
  desc: 'Enable or disable auto bio update.',
  category: 'owner',
  react: '♻️',
  filename: __filename
}, 
async (conn, mek, m, { reply, isOwner, args }) => {
  if (!isOwner) return reply('❌ You are not the owner!');
  
  const enable = args[0] === 'on';
  if (enable) {
    startAutoBio(conn);
    reply('✅ Auto bio has been enabled.');
  } else {
    stopAutoBio();
    reply('❌ Auto bio has been disabled.');
  }
});

module.exports = {
  cmd,
  onStart(conn) {
    startAutoBio(conn);
  }
};