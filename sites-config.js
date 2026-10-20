/* LP360 central site configuration
 * แก้ URL /exec หลักของทุกเว็บไซต์ และ Student Profile เฉพาะเว็บไซต์ที่ใช้งาน ที่ไฟล์นี้ไฟล์เดียว
 * เว็บไซต์ตำบล 27 แห่ง: ชื่อโฟลเดอร์และค่า URL /exec อ้างอิงจาก Excel เว็บไซต์ตำบล(1).xlsx
 */
(() => {
  'use strict';
  // ===== Global shared icon =====
  // แก้ URL รูปที่นี่จุดเดียว แล้วใช้ร่วมกันกับเว็บอำเภอ/ตำบล/ห้องสมุด และ /user/*.html
  const GLOBAL_ICON_URL = 'https://static.wixstatic.com/media/a503e5_55b0959c5ce64be9bc2e8cb06ad4fcd0~mv2.png';

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
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbyK2_4gsMfWfKe2R_yN00n0jABPE1HOct1DtCrDMcoK1RyvWIW4FschoBGvZeBW12Am/exec', // กรอก URL Google Apps Script /exec ของ User 16
      SEO_TITLE: 'ศกร.ระดับตำบลท่าหิน',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลท่าหิน'
    }),
    '17': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbwNPYjC-O2zgqfMe_hK-sbN8xgX7vpkpdd7kfwM7-E5KmHw02QME_FuXkAuMHNgFsLS/exec', // กรอก URL Google Apps Script /exec ของ User 17
      SEO_TITLE: 'ศกร.ระดับตำบลถนนใหญ่',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลถนนใหญ่'
    }),
    '18': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbwR5alK4Q2OKQMdWbpXONTeAkqNn_5_Yvs90gB-WqLZ2T3BTfopGetGfCgAn77Pt4Wu/exec', // กรอก URL Google Apps Script /exec ของ User 18
      SEO_TITLE: 'ศกร.ระดับตำบลนิคมสร้างตนเอง',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลนิคมสร้างตนเอง'
    }),
    '19': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbzfqTtL3miA8PD-miRSVwi7p2mjgTfjy6KHLLgHbOxr5aBoRj6gNENxIYiYXyuDytFSsg/exec', // กรอก URL Google Apps Script /exec ของ User 19
      SEO_TITLE: 'ศกร.ระดับตำบลบ้านข่อย',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลบ้านข่อย'
    }),
    '20': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycby4hnVKdxFvlRgqawx1c1pIdP1sqxxh5yJVDjnW1YZhWGZYLlkSmUB_A3uBsYHu490/exec', // กรอก URL Google Apps Script /exec ของ User 20
      SEO_TITLE: 'ศกร.ระดับตำบลตะลุง',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลตะลุง'
    }),
    '21': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbw8-5Z4pCXfGpFxIh3bmZbDc51_y2i7VV9meu6-NIV3l5s-l-P6Eyz-rsNcXFJ381Sz/exec', // กรอก URL Google Apps Script /exec ของ User 21
      SEO_TITLE: 'ศกร.ระดับตำบลพรหมมาสตร์',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลพรหมมาสตร์'
    }),
    '22': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbyKHDdsyMFt5PpxKLF7nIeffzUiEKK6Na5-onqsE1pJZMUEJOiS74cij6EZQEa5IdqB/exec', // กรอก URL Google Apps Script /exec ของ User 22
      SEO_TITLE: 'ศกร.ระดับตำบลทะเลชุบศร',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลทะเลชุบศร'
    }),
    '23': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbyYldUXqdDhbmEvKdn510np-xTN8lx1OxA5OpPveF0qsiojginDbOaDRPhE33fYokuy/exec', // กรอก URL Google Apps Script /exec ของ User 23
      SEO_TITLE: 'ศกร.ระดับตำบลท้ายตลาด',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลท้ายตลาด'
    }),
    '24': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbyM4JdGmcQsTgffIVbh5wUl3DBBG03B_DU24Gm16mAwYJGZ-zx43wHFFhbD4FzewA517g/exec', // กรอก URL Google Apps Script /exec ของ User 24
      SEO_TITLE: 'ศกร.ระดับตำบลงิ้วราย',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลงิ้วราย'
    }),
        '25': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbx-lVFrjCYO4hJW9tDXvaULgd-8m2g8h3bESLkYBA0iX2zlGYha0E1o3lujg0BAix_p/exec', // กรอก URL Google Apps Script /exec ของ User 24
      SEO_TITLE: 'ศกร.ระดับตำบลโพธิ์ตรุ',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลโพธิ์ตรุ'
    }),
        '26': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbwpCFeoE-aYvPmuUNBFPEVwdRGedjvqkCV2MlBIKWHOROIXn7XQW6p2eP4_cP-EpYAB/exec', // กรอก URL Google Apps Script /exec ของ User 24
      SEO_TITLE: 'ศกร.ระดับตำบลทะเลชุบศร',
      SEO_DESCRIPTION: 'ศกร.ระดับตำบลทะเลชุบศร'
    }),
    '27': Object.freeze({
      EXEC_URL: 'https://script.google.com/macros/s/AKfycbwHZ_C0Cu8d6XNvXkSyzA9VcmplGzPHOI_Xw2NwX-IENUjWjUIFsrKy7bGZNDzgkWj-/exec', // กรอก URL Google Apps Script /exec ของ User 25
      SEO_TITLE: 'ครูผู้สอนคนพิการ',
      SEO_DESCRIPTION: 'ครูผู้สอนคนพิการ'
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
    "thalechupsorn": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลทะเลชุบศร",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycby9AOhUnKjAbgfGfQzm5T_p7tyd2Lq3ubj8lp3zUUGdRPkmw9QpJOmiftj9RvKajyfRBA/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbyKHDdsyMFt5PpxKLF7nIeffzUiEKK6Na5-onqsE1pJZMUEJOiS74cij6EZQEa5IdqB/exec",
      CACHE_PREFIX: "LP360:TAMBOL:THALECHUPSORN:"
    }),
    "khoktum": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลโคกตูม",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbxZTLSAZpCRjhimYUQkVCcMfI65rLxZZseEcT8KLDgEUM97IbHjhVrEwe4K2mm6J3RhBw/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbxSKGDT6lmAkejenqK2NzhBShGXcLJzz5tZ54hpmn8boPnlKgOT8VDFM15GPXYnK2WgmQ/exec",
      CACHE_PREFIX: "LP360:TAMBOL:KHOKTUM:"
    }),
    "khaosamyot": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลเขาสามยอด",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbzGgzPww-qqkE6Q5kxKAOp5SuZZz4K-fp-OeD2I_vaX0jcqH1azgAPymNblOIyH-YO3/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbxmdQONOQ-jdz8ZW-1JpQjypMQdeIMzXhRQ3aI8l_vdymYHcNhAi0zrqEqCkHN6-Q0iuQ/exec",
      CACHE_PREFIX: "LP360:TAMBOL:KHAOSAMYOT:"
    }),
    "bankhoi": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลบ้านข่อย",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbynvw0fVwAbgqDv1CgMOcBV7elsQJq1qeJcQY8lDal8B-MMVdyp-rg9zhFNaAb2xvc8/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbzfqTtL3miA8PD-miRSVwi7p2mjgTfjy6KHLLgHbOxr5aBoRj6gNENxIYiYXyuDytFSsg/exec",
      CACHE_PREFIX: "LP360:TAMBOL:BANKHOI:"
    }),
    "thasala": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลท่าศาลา",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbw3W5FOSBYI0QEOhz4YGVm9pVLvaxqdBcO9fcjXI_yrYz_HopARog0qtM6jeOhvejxWHg/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbwmaMwQP9focosrHtxFTgDkLUEo9oYGWGSv3eFIbaO54VTzbqx98vdLQ_ZQGaIY5L5VWw/exec",
      CACHE_PREFIX: "LP360:TAMBOL:THASALA:"
    }),
    "thanonyai": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลถนนใหญ่",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbygja8Rnpxu0LRHqw8JWqevFWDRB-mCKZJSvnrVk2YOGa-SCf3TY_iRm7G0-tmWsWSJQA/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbwNPYjC-O2zgqfMe_hK-sbN8xgX7vpkpdd7kfwM7-E5KmHw02QME_FuXkAuMHNgFsLS/exec",
      CACHE_PREFIX: "LP360:TAMBOL:THANONYAI:"
    }),
    "ngiorai": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลงิ้วราย",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbySkaAmkNilY5dPqsWDWjYJ_5G0eHmlHOb_w_TNafRk3h9FFvRjoTkeCohc7Rkzit4/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbyM4JdGmcQsTgffIVbh5wUl3DBBG03B_DU24Gm16mAwYJGZ-zx43wHFFhbD4FzewA517g/exec",
      CACHE_PREFIX: "LP360:TAMBOL:NGIORAI:"
    }),
    "khoklamphan": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลโคกลำพาน",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbyemBuLmLmF318lSgcDSOu7in_DfHpcWvRrMQKft00JbOCxPe-qds8SKH7qw155Kwd71g/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbykZh8IUDLwRStAvvoh_ISosL0TT_BiChm-c6P5tBdKUph2V3hEXSDtiOyYHpfHI6mz/exec",
      CACHE_PREFIX: "LP360:TAMBOL:KHOKLAMPHAN:"
    }),
    "kokko": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลกกโก",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbyykrhOEpOp3nsTQvRHxnZH9L8H0AH3VGIWzaIcjTfEdx9jzqNQzAZP8wjAER1Fn-mjLQ/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbztMueg4k6ApQORLKwKXc8N2DJvyGdwtQAvmm0DtsOsEOQEzUfhI0g5V-4H48uUpe1Zlg/exec",
      CACHE_PREFIX: "LP360:TAMBOL:KOKKO:"
    }),
    "talung": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลตะลุง",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbz2HXcWZ9YKMCAvrwMxLHCH-y5tPkuKQqRefzNFLYqB6GMZ3Vr5ZCiO-ZuZJDs-X7c/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycby4hnVKdxFvlRgqawx1c1pIdP1sqxxh5yJVDjnW1YZhWGZYLlkSmUB_A3uBsYHu490/exec",
      CACHE_PREFIX: "LP360:TAMBOL:TALUNG:"
    }),
    "patan": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลป่าตาล",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbxcSlpNbSeRM78TkEEPLk-7X0pTEApMXYSYS5m2DNG0oJCbEW7hs4sC035RGooZWiQg/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbxPo7TIYBmtS8WIXAtmg6Tiw1AyLgD5ORsb4B2sT1RXive39KbFIcjLgaI2ySa7ET5SGA/exec",
      CACHE_PREFIX: "LP360:TAMBOL:PATAN:"
    }),
    "khaosamyot2": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลเขาสามยอด 2",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbw_Y4qiRsSGKuoADkMVzeSqtqmbVlT0s7A2p8iwedYSQzLlqTjHfvNp79OmFytuuAsUZw/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbwfurGYjuS6TemkSM9lplWTbgyejDAWjZpcL3xLp259Svr4INwYKMTWeEZRoZoSRTVO/exec",
      CACHE_PREFIX: "LP360:TAMBOL:KHAOSAMYOT2:"
    }),
    "thakhae": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลท่าแค",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbyyV1EqSpSrYn6LZ6IBZ8j9w3R-1YIx1x_8k30dP1olhedsULjsaRXgCM48UrIGMMa8/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbwRH257UhgMvVrGPAxAmPJkGYEHbA5tYRB6Dm__2fYZr9-ogobdTE3VBSAYHOsKmkq7/exec",
      CACHE_PREFIX: "LP360:TAMBOL:THAKHAE:"
    }),
    "photru": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลโพธิ์ตรุ",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbzl73W40kGZWSZeUfPmyj1zNdwScyp87vQRb25W9M8hslH2FZp4yz5DIc6o5CWLGYxg/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbx-lVFrjCYO4hJW9tDXvaULgd-8m2g8h3bESLkYBA0iX2zlGYha0E1o3lujg0BAix_p/exec",
      CACHE_PREFIX: "LP360:TAMBOL:PHOTRU:"
    }),
    "bangkhanmak": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลบางขันหมาก",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycby01TJiUTKyueJD92H4gTYTlWbPkX892HtTpa0-GlqQjgj7rjMfQNvvWx8R62z6EVgI/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbxnxwDY6hljS4ku-dlgTfxEyAhN64RTg2cwd3HKL8a1jnYFfbwFusSiBjgH3u6qJa59DQ/exec",
      CACHE_PREFIX: "LP360:TAMBOL:BANGKHANMAK:"
    }),
    "phokaoton": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลโพธิ์เก้าต้น",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbxTnDK0rXkk-gQAmSzJywkdROkGm17-zB1Q4cjS1E_wANE6UPanmMVVk6UratyA2tqo/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbwt8luye0xTQhUV-ywIdcOVNLEoQmbMAL0_vRFM1d8AysJ2kYFcxdPiY9nP7-E5Tsre/exec",
      CACHE_PREFIX: "LP360:TAMBOL:PHOKAOTON:"
    }),
    "thahin": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลท่าหิน",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbyipOvdiOuk7ywvE3VQpKmJBn7ETTRFin1YSKrhmIRFYapX4ncxUoHXkNnxiagxJP-Y/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbyK2_4gsMfWfKe2R_yN00n0jABPE1HOct1DtCrDMcoK1RyvWIW4FschoBGvZeBW12Am/exec",
      CACHE_PREFIX: "LP360:TAMBOL:THAHIN:"
    }),
    "nikomsangtoneng": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลนิคมสร้างตนเอง",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbwrGEm0TmBAJUOANvlB8wQnfXOqOcJ2-P1L6G9Wz_iB792tBRvJzH_dQ_WcnuQJNoVu/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbwR5alK4Q2OKQMdWbpXONTeAkqNn_5_Yvs90gB-WqLZ2T3BTfopGetGfCgAn77Pt4Wu/exec",
      CACHE_PREFIX: "LP360:TAMBOL:NIKOMSANGTONENG:"
    }),
    "khokkrathiam": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลโคกกะเทียม",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbyHgv7dJH0GNXxbOFPbdYEUrOxErT2JitWya8UJgnaCqh2I_dyJ8tNoYatsHpSa-y2Z2Q/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbzI0UEH9_pJFZdCjeMPytdZscI7CF-5U8F7LubYkawTYgDrgkuGe7bagYsqiW6x33cw/exec",
      CACHE_PREFIX: "LP360:TAMBOL:KHOKKRATHIAM:"
    }),
    "khaophrangam": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลเขาพระงาม",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbylEKvQDmB-YYlgNc56r4WLbx4wvnw9NhIhuVnOVgj_j1HY6O2I9PitvebAJk_Y7g/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbyYmpyX0Jht_H1Xd6p-wGz9DdpDVrVjs0Mb1Oo_CMaC0mdOFN1HflGwjMUzdEQQFFDvLw/exec",
      CACHE_PREFIX: "LP360:TAMBOL:KHAOPHRANGAM:"
    }),
    "phrommat": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลพรหมมาสตร์",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbzVhWJcrsuEHcYzMtjy9ZGtIhUNIEN-7sAWpn7ibx28IKQXX3siJcqcFsghQ0U0_LZX/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbw8-5Z4pCXfGpFxIh3bmZbDc51_y2i7VV9meu6-NIV3l5s-l-P6Eyz-rsNcXFJ381Sz/exec",
      CACHE_PREFIX: "LP360:TAMBOL:PHROMMAT:"
    }),
    "thaitalat": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลท้ายตลาด",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbz9BZmRI3KzlXdMc4ZxTWH7dtB_FecQmI-doViUZbciI4izivBSLqMF6pSptlbvdAUNgg/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbyYldUXqdDhbmEvKdn510np-xTN8lx1OxA5OpPveF0qsiojginDbOaDRPhE33fYokuy/exec",
      CACHE_PREFIX: "LP360:TAMBOL:THAITALAT:"
    }),
    "sikhlong": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลสี่คลอง",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbxYpEeXA3mmqe9Kj7gNzFRAkFQ5A7UTqgyl53SaqiQLIBBOfesOGCy_7fRSASgvvoXf/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbw0hjz1m5fyqb104tNnCoYIWaLta209va0HEArhgGLTIayD99k0CBWc5TEPv7E_-PWx/exec",
      CACHE_PREFIX: "LP360:TAMBOL:SIKHLONG:"
    }),
    "thalechupsorn-mueanglopburi": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลทะเลชุบศร(เทศบาลเมืองลพบุรี)",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbwf3ggV3x7pEbVj9GdvgnpvNAHyox78fv19p4ZQRa9z1gBJ-jzGAHmOTOxDP3eZFgmTIQ/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbwpCFeoE-aYvPmuUNBFPEVwdRGedjvqkCV2MlBIKWHOROIXn7XQW6p2eP4_cP-EpYAB/exec",
      CACHE_PREFIX: "LP360:TAMBOL:THALECHUPSORN-MUEANGLOPBURI:"
    }),
    "special-ed": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ครูผู้สอนคนพิการ",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbyUJthg1hG2smRRzzQ28YfdD2hPQVJ_59Jxau0sjyX4-eyIsaxYxRH3iCzL8NbfUQ4X/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbwHZ_C0Cu8d6XNvXkSyzA9VcmplGzPHOI_Xw2NwX-IENUjWjUIFsrKy7bGZNDzgkWj-/exec",
      CACHE_PREFIX: "LP360:TAMBOL:SPECIAL-ED:"
    }),
    "donpho": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลดอนโพธิ์",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbzGGpObdReIZEIvYfLJVNuQ7fC_nKVTkoCxitYHCSV8caqUL7JKWzAyZ3AS_8Jbu-1MkQ/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbyqJZ53--KvhHT88CwdfrwmV5hM0PaAA_gPLTt6R90sMnPSzkg37-F_XYqCysjyLrvk/exec",
      CACHE_PREFIX: "LP360:TAMBOL:DONPHO:"
    }),
    "kongthanu": Object.freeze({
      SITE_TYPE: 'TAMBOL',
      SEO_TITLE: "ศกร.ระดับตำบลโก่งธนู",
      SEO_DESCRIPTION: "เว็บไซต์ศูนย์การเรียนรู้ระดับตำบล เรียนรู้ทุกที่ ทุกเวลา ทุกช่วงวัย",
      MAIN_EXEC_URL: "https://script.google.com/macros/s/AKfycbwC99VX5nZ_UBT0sj9Dcv8K9Y6wU2pHIF769f8H-Vddft_TaKY9UgxonSevMOGVM-HS/exec",
      STUDENT_PROFILE_EXEC_URL: "https://script.google.com/macros/s/AKfycbyjMDcuL42vY0PT6_enXRPzkluLDpXdX4Q0BigAAhNvUvGJp1yD0-tRKK6jUced5IWR_g/exec",
      CACHE_PREFIX: "LP360:TAMBOL:KONGTHANU:"
    }),
    librarylopburi1: Object.freeze({
      SITE_TYPE: 'LIBRARY',
      SEO_TITLE: "ห้องสมุดประชาชนจังหวัดลพบุรี",
      SEO_DESCRIPTION: "ห้องสมุดประชาชนจังหวัดลพบุรี",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbzWvVlV7xzUpPMpzyeyL0HVOX240IxGc-lCO6d3JMTcfw_ShAV8QhVvbCXfTrMn5P7a/exec',
      CACHE_PREFIX: 'LP360:LIBRARY:MAIN:'
    }),
    librarylopburi2: Object.freeze({
      SITE_TYPE: 'LIBRARY',
      SEO_TITLE: "ห้องสมุดประชาชน เฉลิมราชกุมารี อําเภอเมืองลพบุรี",
      SEO_DESCRIPTION: "ห้องสมุดประชาชน เฉลิมราชกุมารี อําเภอเมืองลพบุรี",
      MAIN_EXEC_URL: 'https://script.google.com/macros/s/AKfycbx7-5VJNAmlWY0YAnMYVByJx9DbsUJHeSdxr0kju1ojCXy4TE0MZAlbNxR8Dtzg02zt/exec',
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
