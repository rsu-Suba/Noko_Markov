const p = document.getElementById("maintext");
const q = document.getElementById("counter");
const s = document.getElementById("main");
const t = [
   [0, 0.5, 0, 0, 0.5, 0, 0],
   [0, 0, 1, 0, 0, 0, 0],
   [0, 0, 0, 1, 0, 0, 0],
   [0.25, 0, 0.5, 0.25, 0, 0, 0],
   [0, 0, 0, 0, 0, 1, 0],
   [0, 0, 0, 0, 0.5, 0, 0.5],
   [0.5, 0, 0, 0, 0, 0, 0.5],
];
const u = ["し", "か", "の", "こ", "た", "ん", "　"];
const v = ["Nun", "Si1", "Ka", "No1", "Ko1", "No2", "Ko2", "No3", "Ko3", "Ko", "Si2", "Ta1", "N1", "Ta2", "N2", "Drum"];
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));
let a = Math.random();
let b = 0;
let c = 0;
let d = 0;
let e = "し";
let f = 0;
let g = "";
let h = 1;
function onload() {
   s.className = "main-pre";
}
function startbtn() {
   mainfunc();
}
async function mainfunc() {
   s.className = "main";
   document.getElementById(v[0]).style.opacity = 1;
   document.getElementById(v[0]).play();
   await sleep(370);
   p.textContent = "し";
   videooff();
   document.getElementById(v[1]).style.opacity = 1;
   document.getElementById(v[1]).play();
   await sleep(170);
   for (let i = 0; i < t[c].length; i++) {
      b += t[c][i];
      if (b > a) {
         p.textContent += u[i];
         e += u[i];
         if (e == "しかのこのこのここしたんたん　") {
            p.textContent += "\nFinish";
            break;
         }
         if (u[i] == "　") {
            e = "";
            p.textContent += "\n";
            d++;
            q.textContent = `Count:${d}`;
         }
         if (f == 3 && i != (2 || 3)) h = 1;
         if (f == 5 && i != (4 || 5)) h = 1;
         if (i == 0) {
            f == 3 ? (g = "Si2") : (g = "Si1");
         } else if (i == 1) {
            g = "Ka";
         } else if (i == 2) {
            g = `No${h}`;
            h++;
         } else if (i == 3) {
            if (f == 2) {
               g = `Ko${h}`;
               if (h >= 3) h = 1;
            } else {
               g = `Ko`;
               h = 1;
            }
         } else if (i == 4) {
            f = 0 ? (g = "Ta1") : (g = "Ta2");
         } else if (i == 5) {
            g = `N${h}`;
            h++;
            if (h >= 2) h = 1;
         } else if (i == 6) {
            g = "Drum";
         }
         videooff();
         document.getElementById(g).style.opacity = 1;
         document.getElementById(g).currentTime = 0;
         document.getElementById(g).play();
         c = i;
         f = i;
         i = -1;
         a = Math.random();
         b = 0;
         p.scrollTop = p.scrollHeight;
         await sleep(170);
      }
   }
}

function videooff() {
   for (let num = 0; num < v.length; num++) {
      document.getElementById(v[num]).style.opacity = 0;
   }
}
