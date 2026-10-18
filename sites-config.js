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
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbzcvV_8jJAwtWNVAJ3GkmNvpdjuc0eOAiuD67oD0bEJ19Pr5jvNUjdCKotJ0CwgECfjxw/exec',
      SEO_TITLE: 'ศกร.ระดับตำบลปารีส1',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลปารีส1'
    }),
    '2': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbx9LtHzKj0emEt0dJjZ_YCWxyWQbFo4XFjhnZgIDUjBBIlNazXOFEjfSSXnJxkiIIdn2g/exec', // กรอก URL Google Apps Script /exec ของ User 2
      SEO_TITLE: 'User 2 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 2'
    }),
    '3': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 3
      SEO_TITLE: 'User 3 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 3'
    }),
    '4': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 4
      SEO_TITLE: 'User 4 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 4'
    }),
    '5': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 5
      SEO_TITLE: 'User 5 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 5'
    }),
    '6': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 6
      SEO_TITLE: 'User 6 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 6'
    }),
    '7': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 7
      SEO_TITLE: 'User 7 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 7'
    }),
    '8': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 8
      SEO_TITLE: 'User 8 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 8'
    }),
    '9': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 9
      SEO_TITLE: 'User 9 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 9'
    }),
    '10': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 10
      SEO_TITLE: 'User 10 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 10'
    }),
    '11': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 11
      SEO_TITLE: 'User 11 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 11'
    }),
    '12': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 12
      SEO_TITLE: 'User 12 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 12'
    }),
    '13': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 13
      SEO_TITLE: 'User 13 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 13'
    }),
    '14': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 14
      SEO_TITLE: 'User 14 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 14'
    }),
    '15': Object.freeze({
      EXEC_URL: '', // กรอก URL Google Apps Script /exec ของ User 15
      SEO_TITLE: 'User 15 - Learning Platform 360',
      SEO_DESCRIPTION: 'ระบบช่วยเหลือผู้เรียน Learning Platform 360 - User 15'
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
