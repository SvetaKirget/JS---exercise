const a = prompt().trim().toLowerCase();
if (a.endsWith(".com") || a.endsWith(".ru")) {
    console.log("YES");
} else console.log("NO");