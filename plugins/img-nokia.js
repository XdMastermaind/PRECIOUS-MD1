(function (_0x475ba0, _0x2b5a81) {
  const _0x1f8271 = _0x475ba0();
  while (true) {
    try {
      const _0x341248 = parseInt(_0x3cc3(380, 0x255)) / 1 * (-parseInt(_0x3cc3(326, 0x205)) / 2) + parseInt(_0x3cc3(346, 0x3a8)) / 3 * (-parseInt(_0x3cc3(444, 0x3e1)) / 4) + parseInt(_0x3cc3(310, 0x23e)) / 5 + parseInt(_0x3cc3(363, 0x208)) / 6 + parseInt(_0x3cc3(361, 0x3af)) / 7 * (parseInt(_0x3cc3(395, 0x299)) / 8) + parseInt(_0x3cc3(333, 0x36e)) / 9 * (-parseInt(_0x3cc3(429, 0x3bb)) / 10) + parseInt(_0x3cc3(435, 0x39b)) / 11;
      if (_0x341248 === _0x2b5a81) {
        break;
      } else {
        _0x1f8271.push(_0x1f8271.shift());
      }
    } catch (_0x2beb3e) {
      _0x1f8271.push(_0x1f8271.shift());
    }
  }
})(_0xf7a7, 528853);
const _0x183ed0 = function () {
  let _0x5bed9f = true;
  return function (_0x24e8fa, _0x43838e) {
    const _0xcfd066 = _0x5bed9f ? function () {
      if (_0x43838e) {
        const _0x5bee69 = _0x43838e.apply(_0x24e8fa, arguments);
        _0x43838e = null;
        return _0x5bee69;
      }
    } : function () {};
    _0x5bed9f = false;
    return _0xcfd066;
  };
}();
const _0x1d0c0a = _0x183ed0(this, function () {
  return _0x1d0c0a.toString().search("(((.+)+)+)+$").toString().constructor(_0x1d0c0a).search("(((.+)+)+)+$");
});
_0x1d0c0a();
const _0x538317 = function () {
  let _0x1afe4f = true;
  return function (_0x4c8272, _0x52cfdf) {
    const _0x591198 = _0x1afe4f ? function () {
      if (_0x52cfdf) {
        const _0xeda2f4 = _0x52cfdf.apply(_0x4c8272, arguments);
        _0x52cfdf = null;
        return _0xeda2f4;
      }
    } : function () {};
    _0x1afe4f = false;
    return _0x591198;
  };
}();
const _0xbb3105 = _0x538317(this, function () {
  let _0x1a0b0d;
  try {
    const _0xf60941 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x1a0b0d = _0xf60941();
  } catch (_0x220dc8) {
    _0x1a0b0d = window;
  }
  const _0x4b506e = _0x1a0b0d.console = _0x1a0b0d.console || {};
  const _0x345423 = ["log", "warn", "info", "error", "exception", 'table', "trace"];
  for (let _0xf926d0 = 0; _0xf926d0 < _0x345423.length; _0xf926d0++) {
    const _0x1d8894 = _0x538317.constructor.prototype.bind(_0x538317);
    const _0x50e5f7 = _0x345423[_0xf926d0];
    const _0x3abfed = _0x4b506e[_0x50e5f7] || _0x1d8894;
    _0x1d8894.__proto__ = _0x538317.bind(_0x538317);
    _0x1d8894.toString = _0x3abfed.toString.bind(_0x3abfed);
    _0x4b506e[_0x50e5f7] = _0x1d8894;
  }
});
_0xbb3105();
const axios = require("axios");
const FormData = require("form-data");
const fs = require('fs');
const os = require('os');
const path = require("path");
const {
  cmd
} = require("../command");
function formatBytes(_0xdcc528) {
  if (_0xdcc528 === 0) {
    return "0 Bytes";
  }
  const _0x382b92 = ['Bytes', 'KB', 'MB', 'GB'];
  const _0x4d1cf7 = Math.floor(Math.log(_0xdcc528) / Math.log(1024));
  return parseFloat((_0xdcc528 / Math.pow(1024, _0x4d1cf7)).toFixed(2)) + " " + _0x382b92[_0x4d1cf7];
}
const _0x5a0430 = {};
function _0x3cc3(_0x2a2659, _0x1d0c0a) {
  const _0x183ed0 = _0xf7a7();
  _0x3cc3 = function (_0xf7a7a4, _0x3cc34d) {
    _0xf7a7a4 = _0xf7a7a4 - 309;
    let _0x14fdb7 = _0x183ed0[_0xf7a7a4];
    return _0x14fdb7;
  };
  return _0x3cc3(_0x2a2659, _0x1d0c0a);
}
_0x5a0430.pattern = "nokia";
_0x5a0430.alias = ["nokiaedit"];
_0x5a0430.react = '📸';
function _0x293f6c(_0x24f49e, _0x3aed7, _0x3bd93b, _0x43a8d3) {
  return _0x3cc3(_0x3bd93b + 0x235, _0x43a8d3);
}
_0x5a0430.desc = "Scan and remove bg from images";
_0x5a0430.category = "img_edit";
_0x5a0430.use = ".nokia [reply to image]";
function _0x4343c5(_0x33bede, _0xca773b, _0x3b5abe, _0x540f3d) {
  return _0x3cc3(_0xca773b + 0x301, _0x540f3d);
}
_0x5a0430.filename = __filename;
cmd(_0x5a0430, async (_0x4f82ff, _0x572f07, _0x2ba3d4, {
  reply: _0x5d7084,
  mek: _0x35fd7c
}) => {
  try {
    const _0x409b72 = _0x572f07.quoted ? _0x572f07.quoted : _0x572f07;
    const _0x43732b = (_0x409b72.msg || _0x409b72).mimetype || '';
    if (!_0x43732b || !_0x43732b.startsWith("image/")) {
      return _0x5d7084("Please reply to an image file (JPEG/PNG)");
    }
    const _0x40f6f0 = await _0x409b72.download();
    let _0xd155b6 = '';
    if (_0x43732b.includes("image/jpeg")) {
      _0xd155b6 = ".jpg";
    } else {
      if (_0x43732b.includes("image/png")) {
        _0xd155b6 = ".png";
      } else {
        return _0x5d7084("Unsupported image format. Please use JPEG or PNG");
      }
    }
    const _0x250d82 = path.join(os.tmpdir(), "imgscan_" + Date.now() + _0xd155b6);
    fs.writeFileSync(_0x250d82, _0x40f6f0);
    const _0x1ec5ae = new FormData();
    _0x1ec5ae.append("fileToUpload", fs.createReadStream(_0x250d82), "image" + _0xd155b6);
    _0x1ec5ae.append("reqtype", 'fileupload');
    const _0x32f503 = await axios.post("https://catbox.moe/user/api.php", _0x1ec5ae, {
      'headers': _0x1ec5ae.getHeaders()
    });
    const _0x3a4b7d = _0x32f503.data;
    fs.unlinkSync(_0x250d82);
    if (!_0x3a4b7d) {
      throw "Failed to upload image to Catbox";
    }
    const _0x31186e = "https://api.popcat.xyz/v2/nokia?image=" + encodeURIComponent(_0x3a4b7d);
    const _0x53b565 = {
      responseType: "arraybuffer"
    };
    const _0x1d174b = await axios.get(_0x31186e, _0x53b565);
    if (!_0x1d174b || !_0x1d174b.data) {
      return _0x5d7084("Error: The API did not return a valid image. Try again later.");
    }
    const _0x6d3ae9 = Buffer.from(_0x1d174b.data, "binary");
    const _0x3366ca = {
      image: _0x6d3ae9,
      caption: "> *© 𝐏𝐨𝐰𝐞𝐫𝐝 𝐁𝐲 𝐏𝐫𝐞𝐜𝐢𝐨𝐮𝐬-𝐌𝐝*"
    };
    await _0x4f82ff.sendMessage(_0x2ba3d4.chat, _0x3366ca);
  } catch (_0x47bb8e) {
    console.error("Nokia Error:", _0x47bb8e);
    _0x5d7084("An error occurred: " + (_0x47bb8e.response?.["data"]?.['message'] || _0x47bb8e.message || "Unknown error"));
  }
});
function _0xf7a7() {
  const _0x397a33 = ['from', "Error: The", 'i.popcat.x', 'get', "Please rep", "ly to an i", 'arraybuffe', 'tbox.moe/u', 'OjWgR', 'data', 'quoted', "nction() ", 'lhfrY', "return (fu", '2547490lhQPaE', 'uBXOz', 'response', 'xvwAj', 'NqjSZ', 'apply', '12728045ublpxZ', 'download', 'error', '(((.+)+)+)', '.png', 'floor', 'path', ".nokia [re", 'reqtype', '12OvVXyO', 'toFixed', 'append', "An error o", 'getHeaders', "gain later", 'YuSud', 'MKxAe', 'qJgVL', "age. Try a", 'nOjsC', '446755qSWVWs', 'Unsupporte', 'search', 'OooUU', 'DvSnH', 'react', 'includes', "emove bg f", 'category', 'gWTPz', 'ZjRjj', 'image/png', 'LNQvv', "0 Bytes", 'mimetype', 'yz/v2/noki', '8WsOGeQ', 'JErao', 'image/', 'bind', 'post', 'nGFXS', '(JPEG/PNG)', '27oCtSvF', 'unlinkSync', 'lEUov', 'img_edit', 'ltfRR', "se use JPE", 'table', 'iGeHc', 'ser/api.ph', "upload ima", '__proto__', 'https://ca', 'log', '492378XcTfNu', 'https://ap', "rn this\")(", "ot return ", 'caption', 'prototype', 'form-data', 'YeOvy', 'chat', 'IUSEB', 'use', 'UIwBy', "є∂ ву precious ", 'writeFileS', 'binary', '488299xBBgkv', "Nokia Erro", '2755122SqCThH', '../command', 'oDMnv', 'trace', 'ync', "a valid im", 'now', 'pattern', 'nokia', 'axios', '{}.constru', "Scan and r", 'info', 'image', 'EbiIG', 'wEpVF', 'a?image=', '206749djERuA', "rmat. Plea", 'filename', 'pfwXk', 'nokiaedit', 'image/jpeg', 'Stream', 'FbdXj', 'tmpdir', '.jpg', 'createRead', 'mfilN', 'desc', 'length', 'exception', '104UjuHmv', 'HMKie', 'futaJ', "Unknown er", 'warn', 'constructo', 'EAMea', 'uQVmi', 'md*', 'AVRYA', "> *© ᴘσωєʀ", 'msg', 'RIzZS', 'FNAmf', 'imgscan_', 'xxvzh', "ctor(\"retu", 'console', "ge to Catb", 'toString'];
  _0xf7a7 = function () {
    return _0x397a33;
  };
  return _0xf7a7();
}