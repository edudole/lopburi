/* LP360 central site configuration
 * แก้ URL /exec หลักของทุกเว็บไซต์ และ Student Profile เฉพาะเว็บไซต์ที่ใช้งาน ที่ไฟล์นี้ไฟล์เดียว
 * เวลาเพิ่มตำบล: copy /tambon1 -> /tambon4 แล้วเพิ่ม entry tambon4 ด้านล่าง
 */
(() => {
  'use strict';
  // ===== Global shared icon =====
  // แก้ URL รูปที่นี่จุดเดียว แล้วใช้ร่วมกันกับเว็บอำเภอ/ตำบล/ห้องสมุด และ /user/*.html
  const GLOBAL_ICON_URL = 'https://static.wixstatic.com/media/a503e5_b1f34c9cb73e40a0b027042bb3f6c959~mv2.png';

  // ===== User iframe pages =====
  // เพิ่มไฟล์ใหม่: copy /user/1.html -> /user/2.html แล้วเพิ่ม entry "2" ที่นี่
  // User 2-25: ใส่ EXEC_URL เมื่อพร้อมใช้งาน; หากว่างจะแสดงข้อความแจ้งให้กำหนดค่า
  const USER_PAGES = Object.freeze({
    '1': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbykZh8IUDLwRStAvvoh_ISosL0TT_BiChm-c6P5tBdKUph2V3hEXSDtiOyYHpfHI6mz/exec',
      SEO_TITLE: 'ศกร.ระดับตำบลโคกลำพาน',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลโคกลำพาน'
    }),
    '2': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbwfurGYjuS6TemkSM9lplWTbgyejDAWjZpcL3xLp259Svr4INwYKMTWeEZRoZoSRTVO/exec', // กรอก URL Google Apps Script /exec ของ User 2
      SEO_TITLE: 'ศกร.ระดับคำบลเขาสามยอด2',
      SEO_DESCRIPTION: 'ศกร.ระดับคำบลเขาสามยอด2'
    }),
    '3': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbztMueg4k6ApQORLKwKXc8N2DJvyGdwtQAvmm0DtsOsEOQEzUfhI0g5V-4H48uUpe1Zlg/exec', // กรอก URL Google Apps Script /exec ของ User 3
      SEO_TITLE: 'ศกร.ระดับตำบลกกโก',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลกกโก'
    }),
    '4': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbw0hjz1m5fyqb104tNnCoYIWaLta209va0HEArhgGLTIayD99k0CBWc5TEPv7E_-PWx/exec', // กรอก URL Google Apps Script /exec ของ User 4
      SEO_TITLE: 'ศกร.ระดับตำบลสี่คลอง',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลสี่คลอง'
    }),
    '5': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbyjMDcuL42vY0PT6_enXRPzkluLDpXdX4Q0BigAAhNvUvGJp1yD0-tRKK6jUced5IWR_g/exec', // กรอก URL Google Apps Script /exec ของ User 5
      SEO_TITLE: 'ศกร.ระดับตำบลโก่งธนู',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลโก่งธนู'
    }),
    '6': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbyYmpyX0Jht_H1Xd6p-wGz9DdpDVrVjs0Mb1Oo_CMaC0mdOFN1HflGwjMUzdEQQFFDvLw/exec', // กรอก URL Google Apps Script /exec ของ User 6
      SEO_TITLE: 'ศกร.ระดับตำบลเขาพระงาม',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลเขาพระงาม'
    }),
    '7': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbxmdQONOQ-jdz8ZW-1JpQjypMQdeIMzXhRQ3aI8l_vdymYHcNhAi0zrqEqCkHN6-Q0iuQ/exec', // กรอก URL Google Apps Script /exec ของ User 7
      SEO_TITLE: 'ศกร.ระดับตำบลเขาสามยอด',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลเขาสามยอด'
    }),
    '8': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbzI0UEH9_pJFZdCjeMPytdZscI7CF-5U8F7LubYkawTYgDrgkuGe7bagYsqiW6x33cw/exec', // กรอก URL Google Apps Script /exec ของ User 8
      SEO_TITLE: 'ศกร.ระดับตำบลโคกกะเทียม',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลโคกกะเทียม'
    }),
    '9': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbwt8luye0xTQhUV-ywIdcOVNLEoQmbMAL0_vRFM1d8AysJ2kYFcxdPiY9nP7-E5Tsre/exec', // กรอก URL Google Apps Script /exec ของ User 9
      SEO_TITLE: 'ศกร.ระดับตำบลโพธิ์เก้าต้น',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลโพธิ์เก้าต้น'
    }),
    '10': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbxSKGDT6lmAkejenqK2NzhBShGXcLJzz5tZ54hpmn8boPnlKgOT8VDFM15GPXYnK2WgmQ/exec', // กรอก URL Google Apps Script /exec ของ User 10
      SEO_TITLE: 'ศกร.ระดับตำบลโคกตูม',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลโคกตูม'
    }),
    '11': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbwmaMwQP9focosrHtxFTgDkLUEo9oYGWGSv3eFIbaO54VTzbqx98vdLQ_ZQGaIY5L5VWw/exec', // กรอก URL Google Apps Script /exec ของ User 11
      SEO_TITLE: 'ศกร.ท่าศาลา',
      SEO_DESCRIPTION: 'ศกร.ท่าศาลา'
    }),
    '12': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbyqJZ53--KvhHT88CwdfrwmV5hM0PaAA_gPLTt6R90sMnPSzkg37-F_XYqCysjyLrvk/exec', // กรอก URL Google Apps Script /exec ของ User 12
      SEO_TITLE: 'ศกร.ระดับตำบลดอนโพธิ์',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลดอนโพธิ์'
    }),
    '13': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbwRH257UhgMvVrGPAxAmPJkGYEHbA5tYRB6Dm__2fYZr9-ogobdTE3VBSAYHOsKmkq7/exec', // กรอก URL Google Apps Script /exec ของ User 13
      SEO_TITLE: 'ศกร.ระดับตำบลท่าแค',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลท่าแค'
    }),
    '14': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbxnxwDY6hljS4ku-dlgTfxEyAhN64RTg2cwd3HKL8a1jnYFfbwFusSiBjgH3u6qJa59DQ/exec', // กรอก URL Google Apps Script /exec ของ User 14
      SEO_TITLE: 'ศกร.ระดับตำบลบางขันหมาก',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลบางขันหมาก'
    }),
    '15': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbxPo7TIYBmtS8WIXAtmg6Tiw1AyLgD5ORsb4B2sT1RXive39KbFIcjLgaI2ySa7ET5SGA/exec', // กรอก URL Google Apps Script /exec ของ User 15
      SEO_TITLE: 'ศกร.ระดับตำบลป่าตาล',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลป่าตาล'
    }),
    '16': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 16
      SEO_TITLE: 'User 16 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 16'
    }),
    '17': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 17
      SEO_TITLE: 'User 17 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 17'
    }),
    '18': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 18
      SEO_TITLE: 'User 18 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 18'
    }),
    '19': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 19
      SEO_TITLE: 'User 19 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 19'
    }),
    '20': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 20
      SEO_TITLE: 'User 20 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 20'
    }),
    '21': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 21
      SEO_TITLE: 'User 21 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 21'
    }),
    '22': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 22
      SEO_TITLE: 'User 22 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 22'
    }),
    '23': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 23
      SEO_TITLE: 'User 23 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 23'
    }),
    '24': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 24
      SEO_TITLE: 'User 24 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 24'
    }),
    '25': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 25
      SEO_TITLE: 'User 25 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 25'
    })
  });

  const SITES = Object.freeze({
    district: Object.freeze({
      SITE_TYPE: 'DISTRICT',
      SEO_TITLE: "เว็บไซต์ สกร.ระดับอำเภอตัวอย่าง",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์ส่งเสริมการเรียนรู้ระดับอำเภอ",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbyGRs8U6Y_90v4vp-b89DbPys6XdK10wNfk6wr9GlOodS56eCmt9mRAQaor06sPXSyw/exec',
      STUDENT_PROFILE_EXEC_URL: 'https://script.google.com/macros/s/AKfycbwSh6yjzEbHKVTQ4yELx6tHZsHY9NSOb53IohWwt84RuCl8hDYxQYJHho-bSNmRbwxB/exec',
      CACHE_PREFIX: 'LP360:DISTRICT:ROOT:'
    }),
    tambon1: Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "เว็บไซต์ ศกร.ระดับตำบลตัวอย่าง",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbxY9zSf4sfrlcN1cLne-rdx-i-6wDV0pbN-WfNI-Myc3iOZWFwLxCLv-l2SexPHtdIo/exec',
      STUDENT_PROFILE_EXEC_URL: 'https://script.google.com/macros/s/AKfycbzcvV_8jJAwtWNVAJ3GkmNvpdjuc0eOAiuD67oD0bEJ19Pr5jvNUjdCKotJ0CwgECfjxw/exec',
      CACHE_PREFIX: 'LP360:TAMBOL:TAMBON1:'
    }),
    tambon2: Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "เว็บไซต์ ศกร.ระดับตำบล 2",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbyXrG7HZVrpflXKo-rr4jf2Ez79NqWpSEgh6bBD0OXSrk5oX9_SWl4CatDBFX5gS8c-RA/exec',
      STUDENT_PROFILE_EXEC_URL: 'https://script.google.com/macros/s/AKfycby6Djhw21tB-lHRdJUT5ZO6yDL-Ha6-cdzglEQ9TW6N_7Teyr1_xp4Ic07g8Ja2rh-Y/exec',
      CACHE_PREFIX: 'LP360:TAMBOL:TAMBON2:'
    }),
    tambon3: Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "เว็บไซต์ ศกร.ระดับตำบล 3",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbzdxC1rPWTuehzRtKKgzKOhiwFLYz5i6-e4Ak9wsDnRd3lMtNnI2KqKS90PdOPUPsVH/exec',
      STUDENT_PROFILE_EXEC_URL: 'https://script.google.com/macros/s/AKfycbxbrG5aYd2c0Fzz7aZ0qjqY3I1lDgnw4Wm2DUWo_oRzlfXP453wHSXgdv8Y3K5ZgMic/exec',
      CACHE_PREFIX: 'LP360:TAMBOL:TAMBON3:'
    }),
    library: Object.freeze({
      SITE_TYPE: 'LIBRARY',
      SEO_TITLE: "เว็บไซต์ห้องสมุดตัวอย่าง",
      SEO_DESCRIPTION: "เว็บไซต์ห้องสมุดประชาชน",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbwjxamEm78z1EzEg29ZdAOlsicha9sBB_c0wqYaVU8vqm8YBcbk1fxlOeApojTfJkb9/exec',
      CACHE_PREFIX: 'LP360:LIBRARY:MAIN:'
    }),
  });

  function detectSiteKey() {
    const script = document.currentScript;
    let basePath = '/';
    try {
      if (script && script.src) basePath = new URL('.', script.src).pathname;
    } catch (_) {}
    let path = location.pathname || '/';
    if (path.startsWith(basePath)) path = path.slice(basePath.length);
    path = path.replace(/^\/+/, '');
    const first = (path.split('/')[0] || '').toLowerCase();
    if (first && Object.prototype.hasOwnProperty.call(SITES, first)) return first;
    return 'district';
  }

  const SITE_KEY = detectSiteKey();
  const site = SITES[SITE_KEY] || SITES.district;
  const cfg = Object.freeze({
    SITE_KEY,
    SITE_TYPE: site.SITE_TYPE,
    SEO_TITLE: site.SEO_TITLE || '',
    SEO_DESCRIPTION: site.SEO_DESCRIPTION || '',
    EXEC_URL: site.MAIN_EXEC_URL,
    API_URL: site.MAIN_EXEC_URL,
    MAIN_EXEC_URL: site.MAIN_EXEC_URL,
    STUDENT_PROFILE_EXEC_URL: site.STUDENT_PROFILE_EXEC_URL || '',
    CACHE_PREFIX: site.CACHE_PREFIX,
    GLOBAL_ICON_URL: GLOBAL_ICON_URL
  });

  function applyGlobalIcon_() {
    if (!GLOBAL_ICON_URL || !document || !document.head) return;
    const defs = [
      ['icon', 'image/png'],
      ['shortcut icon', 'image/png'],
      ['apple-touch-icon', ''],
      ['apple-touch-icon-precomposed', '']
    ];
    defs.forEach(([rel, type]) => {
      let el = document.head.querySelector('link[data-lp360-global-icon="' + rel + '"]');
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        el.setAttribute('data-lp360-global-icon', rel);
        document.head.appendChild(el);
      }
      if (type) el.type = type;
      el.href = GLOBAL_ICON_URL;
    });
  }

  window.LP360_SITES_CONFIG = SITES;
  window.LP360_USER_PAGES_CONFIG = USER_PAGES;
  window.LP360_GLOBAL_ICON_URL = GLOBAL_ICON_URL;
  window.LP360_CURRENT_SITE_KEY = SITE_KEY;
  window.APP_CONFIG = cfg;
  if (cfg.STUDENT_PROFILE_EXEC_URL) {
    window.STUDENT_PROFILE_WEB_APP_URL = cfg.STUDENT_PROFILE_EXEC_URL;
  }
  applyGlobalIcon_();
})();
