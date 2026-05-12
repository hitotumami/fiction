const caseData = {
    case1: {
        title: "佐藤 結衣（17）",
        image: "case1.png",
        body: "状況：夏祭りの夜、鏡ヶ池のほとりで目撃されたのを最後に消息を絶つ。現場に残されたスマートフォンには、池の表面に「こちら側を覗き込むように」映る、本人とは似て非なる何者かの動画が3分間記録されていた。"
    },
    case2: {
        title: "進藤　茂（6）",
        image: "case2.png",
        body: "入学式の夕方、近所の公園へ向かったきり行方不明となる。大規模な捜索が行われたが遺留品すら見つからず、10年後の同日、公園内トイレの壁面に「おなかがすいた」という、茂君の筆跡と一致するチョークの書き込みが突如出現した。なお、そのトイレは前日に清掃されたばかりであった。"
    },
    case3: {
        title: "「奉納船」集団失踪事件",
        image: "case3.png",
        body: "状況：昭和19年、戦勝祈願として建造された巨大な奉納船。進水式当日、霧の中から現れた「黒い波」に飲み込まれ、乗船していた村人42名と共に消失。後日、山頂で船の破片の一部が発見されたが、塩分は検出されなかった。"
    },
    case4: {
        title: "高橋 健一（31）",
        image: "case4.png",
        body: "状況：リモート会議中に「誰かがドアを叩いている」と言い残し離席。画面には無人の部屋が映り続けたが、1時間後、画面外から伸びてきた「節の多すぎる指」がノートPCを閉じ、通信が途絶した。"
    }
};

function openCase(id) {
    const modal = document.getElementById('case-modal');
    const body = document.getElementById('modal-body');
    const data = caseData[id];
    
    body.innerHTML = `
        <div class="modal-image-container">
            <img src="${data.image}" alt="CASE_FILE" onerror="this.style.parentElement.style.display='none';">
        </div>
        <h2>${data.title}</h2>
        <p>${data.body}</p>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCase() {
    document.getElementById('case-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        if (e.target.value === 'たすけて') {
            document.getElementById('abyss').style.display = 'flex';
            setTimeout(() => { location.reload(); }, 4000);
        }
    });
}

setInterval(() => {
    if (Math.random() < 0.05) {
        const title = document.getElementById('main-title');
        const original = title.innerText;
        title.innerText = "ウ シ ロ ニ イ ル ヨ";
        setTimeout(() => { title.innerText = original; }, 150);
    }
}, 5000);

window.onclick = function(event) {
    if (event.target == document.getElementById('case-modal')) closeCase();
};