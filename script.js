const BASE_IMG_URL = "img/";

const roles = [
    { name: "Alpha Werewolf", img: "Alpha_Werewolf.webp", desc: "Sói đầu đàn" },
    { name: "Blind Werewolf", img: "Blind_Werewolf.webp", desc: "Sói mù" },
    { name: "Candy Wolf", img: "Candy_wolf.webp", desc: "Sói kẹo" },
    { name: "Confusion Wolf", img: "Confusion_Wolf.webp", desc: "Sói mơ" },
    { name: "Gentlewolf", img: "Gentlewolf_bigger_immage.webp", desc: "Sói lịch lãm" },
    { name: "Cursed", img: "Cursed.webp", desc: "Bán sói" },
    { name: "Ghost Wolf", img: "Ghost_wolf_icon.webp", desc: "Sói ma" },
    { name: "Guardian Wolf", img: "Guardian_Wolf.webp", desc: "Sói hộ vệ" },
    { name: "Jelly Wolf", img: "Jelly_Wolf.webp", desc: "Sói thạch" },
    { name: "Junior Werewolf", img: "Junior_Werewolf.webp", desc: "Sói trẻ" },
    { name: "Kitten Wolf", img: "Kitten_Wolf.webp", desc: "Sói mèo" },
    { name: "Nightmare Werewolf", img: "Nightmare_Werewolf.webp", desc: "Sói mộng" },
    { name: "Party Wolf", img: "Party_Wolf.webp", desc: "Sói tiệc tùng" },
    { name: "Regular Werewolf", img: "Werewolf.webp", desc: "Sói thường" },
    { name: "Shadow Wolf", img: "Shadow_Wolf.webp", desc: "Sói bóng tối" },
    { name: "Sorcerer", img: "Sorcerer.webp", desc: "Sói phù thủy" },
    { name: "Split Wolf", img: "Split_Wolf.webp", desc: "Sói phân tách" },
    { name: "Storm Wolf", img: "Storm_Wolf.webp", desc: "Sói bão" },
    { name: "Stubborn Werewolf", img: "Stubborn_werewolf_icon.webp", desc: "Sói bướng bỉnh" },
    { name: "Swamp Wolf", img: "Swamp_Werewolf.svg", desc: "Sói đầm lầy" },
    { name: "Toxic Wolf", img: "Toxic_Wolf.webp", desc: "Sói độc" },
    { name: "Voodoo Werewolf", img: "Voodoo_Werewolf.webp", desc: "Sói tà thuật" },
    { name: "Werewolf Berserk", img: "Werewolf_Berserk.webp", desc: "Sói điên cuồng" },
    { name: "Werewolf Fan", img: "Werewolf_Fan.webp", desc: "Kẻ hâm mộ" },
    { name: "Wolf Pacifist", img: "Wolf_Pacifist.webp", desc: "Sói hòa bình" },
    { name: "Wolf Scribe", img: "Wolf_scribe.webp", desc: "Sói biên kịch" },
    { name: "Wolf Seer", img: "Wolf_Seer.webp", desc: "Sói tiên tri" },
    { name: "Wolf Shaman", img: "Wolf_Shaman.webp", desc: "Sói pháp sư" },
    { name: "Wolf Summoner", img: "Wolf_Summoner.webp", desc: "Sói triệu hồi" },
    { name: "Wolf Time Traveler", img: "Wolf_Time_Traveler_Icon.svg", desc: "Sói thời gian" },
    { name: "Wolf Trickster", img: "Wolf_trickster.webp", desc: "Sói lừa đảo" }
    { name: "Firework Wolf", img: "Firework_Wolf.webp", desc: "Sói pháo hoa" }
    { name: "Wolf Magician", img: "Wolf_Magician.webp", desc: "Sói ảo thuật gia" }
    { name: "Snatcher Wolf", img: "Snatcher_Wolf.webp", desc: "Sói đạo tặc" }
    // anh giữ nguyên toàn bộ danh sách của anh
];

const container = document.getElementById("link-container");

roles.forEach(role => {
    const fileName = role.name.replace(/ /g, "_");

    const card = document.createElement("a");
    card.className = "card";
    card.href = `https://wolvesville.fandom.com/wiki/${fileName}`;
    card.target = "_blank";

    const img = document.createElement("img");
    img.src = BASE_IMG_URL + role.img;

    const name = document.createElement("span");
    name.className = "role-name";
    name.textContent = role.name;

    const desc = document.createElement("small");
    desc.className = "role-desc";
    desc.textContent = role.desc;

    card.append(img, name, desc);
    container.appendChild(card);
});

/* CLOCK */
function updateClock() {
    const n = new Date();
    document.getElementById("clock").textContent =
        `${String(n.getDate()).padStart(2,"0")}/${String(n.getMonth()+1).padStart(2,"0")}/${n.getFullYear()}
         ${String(n.getHours()).padStart(2,"0")}:${String(n.getMinutes()).padStart(2,"0")}:${String(n.getSeconds()).padStart(2,"0")}`;
}
setInterval(updateClock, 1000);
updateClock();
