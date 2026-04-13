// 基础常量定义
const baseCostPerPoint = 0.0731; // 每积分单价
const pointsPerSecond = 10;      // 每秒消耗积分

// 初始化事件监听
document.addEventListener('DOMContentLoaded', function() {
    // 绑定所有交互元素的事件
    bindEventListeners();
    // 初始化计算器显示
    updateWasteDisplay();
    updateCalc();
});

// 绑定事件监听函数
function bindEventListeners() {
    // 创作体裁切换事件
    document.querySelectorAll('input[name="projectType"]').forEach((elem) => {
        elem.addEventListener("change", function() {
            // 切换体裁时重置对应默认值
            const item = this.value;
            const eps = document.getElementById('input-episodes');
            const dur = document.getElementById('input-duration');
            const wst = document.getElementById('input-waste');
            
            if (item === 'mini') {
                eps.value = 80; 
                dur.value = 2; 
                wst.value = 3;
            } else if (item === 'series') {
                eps.value = 24; 
                dur.value = 45; 
                wst.value = 5;
            } else if (item === 'movie') {
                document.getElementById('input-duration-movie').value = 100;
                wst.value = 10;
            }
            updateWasteDisplay();
            updateCalc();
        });
    });

    // 废片倍数滑块事件
    document.getElementById('input-waste').addEventListener('input', function() {
        updateWasteDisplay();
        updateCalc();
    });

    // 会员方案切换事件
    document.querySelectorAll('input[name="subPlan"]').forEach((elem) => {
        elem.addEventListener("change", updateCalc);
    });

    // 输入框数值变化事件
    document.getElementById('input-episodes').addEventListener('input', updateCalc);
    document.getElementById('input-duration').addEventListener('input', updateCalc);
    document.getElementById('input-duration-movie').addEventListener('change', updateCalc);
}

// 更新废片倍数显示
function updateWasteDisplay() {
    document.getElementById('waste-display').innerText = document.getElementById('input-waste').value;
}

// 核心计算逻辑
function updateCalc() {
    // 1. 获取输入值
    const type = document.querySelector('input[name="projectType"]:checked').value;
    let episodes = 1;
    let durationMins = 0;

    // 获取容器元素
    const episodesContainer = document.getElementById('episodes-container');
    const durationNumberContainer = document.getElementById('duration-container-number');
    const durationSelectContainer = document.getElementById('duration-container-select');
    const wasteInput = document.getElementById('input-waste');

    // 根据体裁切换UI显示
    if (type === 'movie') {
        episodesContainer.style.display = 'none';
        durationNumberContainer.style.display = 'none';
        durationSelectContainer.style.display = 'block';
        
        episodes = 1;
        durationMins = parseFloat(document.getElementById('input-duration-movie').value) || 100;
    } else {
        episodesContainer.style.display = 'block';
        durationNumberContainer.style.display = 'block';
        durationSelectContainer.style.display = 'none';
        
        episodes = parseFloat(document.getElementById('input-episodes').value) || 1;
        durationMins = parseFloat(document.getElementById('input-duration').value) || 1;
    }

    // 获取废片倍数和折扣
    const wasteMultiplier = parseFloat(wasteInput.value) || 1;
    const discount = parseFloat(document.querySelector('input[name="subPlan"]:checked').value);

    // 2. 核心计算
    const totalMinutes = episodes * durationMins; // 总成片时长（分钟）
    const totalSeconds = totalMinutes * 60;       // 总成片时长（秒）
    const generatedSeconds = totalSeconds * wasteMultiplier; // 实际生成时长（含废片，秒）
    const totalPoints = generatedSeconds * pointsPerSecond;  // 总消耗积分
    const finalCost = totalPoints * baseCostPerPoint * discount; // 最终成本

    // 计算传统预算参考值（按页面原有基准）
    let oldCost = 0;
    if (type === 'mini') {
        oldCost = totalMinutes * 2500;      // 微短剧：2500元/分钟
    } else if (type === 'series') {
        oldCost = totalMinutes * 13888;     // 连续剧：13888元/分钟
    } else if (type === 'movie') {
        oldCost = totalMinutes * 550000;    // 院线电影：550000元/分钟
    }

    // 3. 更新UI显示
    document.getElementById('res-duration').innerText = totalMinutes.toLocaleString();
    document.getElementById('res-seconds').innerText = generatedSeconds.toLocaleString();
    document.getElementById('res-points').innerText = totalPoints.toLocaleString();
    
    // 格式化最终成本显示（取整+千分位）
    document.getElementById('res-cost').innerText = Math.round(finalCost).toLocaleString();
    document.getElementById('res-old-cost').innerText = Math.round(oldCost).toLocaleString();

    // 更新折扣提示文本
    const hintElem = document.getElementById('res-discount-text');
    if(discount === 1) {
        hintElem.innerHTML = "按 <span class='text-white'>单月购买原价</span> 计费";
        hintElem.className = "text-purple-400 text-sm mt-4 font-medium";
    } else if (discount === 0.6) {
        hintElem.innerHTML = "按 <span class='text-white'>连续包月 (6折)</span> 计费";
        hintElem.className = "text-yellow-400 text-sm mt-4 font-medium";
    } else {
        hintElem.innerHTML = "按 <span class='text-white'>连续包年 (5折)</span> 计费";
        hintElem.className = "text-red-400 text-sm mt-4 font-medium";
    }
}