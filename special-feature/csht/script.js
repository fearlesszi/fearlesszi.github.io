const questions = [
    "1. 社群成员是否经常鼓励你减少或切断与非本圈子亲友的联系？",
    "2. 当你表达对原生家庭的依恋时，是否被贴上“不觉醒”或“奴性”的标签？",
    "3. 社群是否向你灌输“只有圈内人才是真正的家人，圈外都是敌人/压迫者”？",
    "4. 在社群里讨论公共议题时，是否必须保持高度一致，不允许质疑或中立？",
    "5. 你是否感到你的“性取向”标签被无限放大，逐渐盖过了你的职业和爱好？",
    "6. 社群是否要求你使用一套特定的、充满攻击性的词汇来评价社会现象？",
    "7. 在你加入初期，是否感受到了高强度的、令人眩晕的关怀与赞美（爱心轰炸）？",
    "8. 当你试图接触不同观点的群体时，是否感到了圈子内传来的压力或道德绑架？",
    "9. 社群是否将性取向权益与某些极端的政治、地缘主张强行“捆绑销售”？",
    "10. 你是否觉得自己成了某种运动的“数字劳工”或“冲锋工具”，而非被关怀的个体？"
];

let currentIdx = 0;
let answers = []; // 记录每题的得分情况

const qText = document.getElementById("question-text");
const progressBar = document.getElementById("progress-bar");
const btnPrev = document.getElementById("btn-prev");
const quizBox = document.getElementById("quiz-container");
const resultBox = document.getElementById("result-container");

function updateUI() {
    qText.innerText = questions[currentIdx];
    progressBar.style.width = `${((currentIdx) / questions.length) * 100}%`;
    btnPrev.disabled = currentIdx === 0;
}

function handleAnswer(isYes) {
    answers[currentIdx] = isYes ? 1 : 0;
    if (currentIdx < questions.length - 1) {
        currentIdx++;
        updateUI();
    } else {
        showResult();
    }
}

function prevQuestion() {
    if (currentIdx > 0) {
        currentIdx--;
        updateUI();
    }
}

function resetQuiz() {
    currentIdx = 0;
    answers = [];
    quizBox.classList.remove("hidden");
    resultBox.classList.add("hidden");
    updateUI();
}

function showResult() {
    const totalScore = answers.reduce((a, b) => a + b, 0);
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    
    document.getElementById("score-display").innerText = totalScore + " / 10";
    
    let advice = "";
    if (totalScore <= 3) {
        advice = "<strong>【健康/理想】</strong> 你所处的社群环境相对开放。它更像是一个支持系统而非控制系统。请继续保持你的独立思考能力，多元化社交。";
    } else if (totalScore <= 6) {
        advice = "<strong>【预警/偏激】</strong> 该社群已表现出一定的极化倾向。你可能正在被灌输一些单一价值观。建议你有意识地接触圈外信息，维护好原生社会支持系统。";
    } else {
        advice = "<strong>【高危/操控】</strong> 警惕！该环境符合“运作法”的典型特征。你可能正处于心理操控或工具化的风险中。建议拉开距离，审视其对你真实生活的剥蚀，必要时寻求心理专业帮助。";
    }
    document.getElementById("result-advice").innerHTML = advice;
}

// 初始化
updateUI();
