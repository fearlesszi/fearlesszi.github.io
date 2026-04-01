// --- 数据源：船籍注册地 (扩充至40+) ---
const jurisdictions = [
    // 亚洲/大洋洲
    { id: 'MY-LGK', name: '马来西亚 兰卡威', en: 'Langkawi', flag: '🇲🇾', link: 'https://www.marine.gov.my/', tags: ['allow_cn', 'cheap', 'asia_local', 'region_malacca', 'region_thai', 'diy_friendly'] },
    { id: 'HK', name: '中国香港', en: 'Hong Kong', flag: '🇭🇰', link: 'https://www.mardep.gov.hk/', tags: ['hk_resident', 'high_tier', 'asia_local', 'region_cn'] },
    { id: 'CN', name: '中国', en: 'China', flag: '🇨🇳', link: 'https://www.msa.gov.cn/', tags: ['cn_citizen', 'region_cn', 'local_only'] },
    { id: 'SG', name: '新加坡', en: 'Singapore', flag: '🇸🇬', link: 'https://www.mpa.gov.sg/', tags: ['high_tier', 'asia_local', 'region_malacca'] },
    { id: 'AU', name: '澳大利亚', en: 'Australia', flag: '🇦🇺', link: 'https://www.amsa.gov.au/', tags: ['local_res', 'high_tier', 'region_nz'] },
    { id: 'NZ', name: '新西兰', en: 'New Zealand', flag: '🇳🇿', link: 'https://www.maritimenz.govt.nz/', tags: ['local_res', 'high_tier', 'region_nz'] },
    { id: 'CK', name: '库克群岛', en: 'Cook Islands', flag: '🇨🇰', link: 'https://www.maritimecookislands.com/', tags: ['allow_cn', 'pacific', 'region_nz', 'diy_friendly'] },
    { id: 'PH', name: '菲律宾', en: 'Philippines', flag: '🇵🇭', link: 'https://marina.gov.ph/', tags: ['local_res', 'region_ph'] },
    { id: 'TH', name: '泰国', en: 'Thailand', flag: '🇹🇭', link: 'https://md.go.th/', tags: ['local_res', 'region_thai'] },
    
    // 美洲/加勒比
    { id: 'PA', name: '巴拿马', en: 'Panama', flag: '🇵🇦', link: 'https://www.amp.gob.pa/', tags: ['allow_cn', 'cheap', 'global', 'diy_friendly', 'region_carib'] },
    { id: 'KY', name: '开曼群岛', en: 'Cayman Islands', flag: '🇰🇾', link: 'https://www.cishipping.com/', tags: ['high_tier', 'carib', 'global', 'allow_cn_via_company', 'region_carib'] },
    { id: 'VG', name: '英属维尔京群岛', en: 'BVI', flag: '🇻🇬', link: 'https://www.bvi.gov.vg/', tags: ['high_tier', 'carib', 'allow_cn_via_company', 'region_carib'] },
    { id: 'MH', name: '马绍尔群岛', en: 'Marshall Islands', flag: '🇲🇭', link: 'https://www.register-iri.com/', tags: ['allow_cn', 'us_friendly', 'global', 'region_florida', 'region_alaska'] },
    { id: 'US-DE', name: '美国特拉华州', en: 'Delaware, USA', flag: '🇺🇸', link: 'https://dnrec.delaware.gov/', tags: ['allow_cn', 'us_friendly', 'cheap', 'diy_friendly', 'region_florida', 'region_alaska'] },
    { id: 'US-CG', name: '美国 (USCG)', en: 'USA (Federal)', flag: '🇺🇸', link: 'https://www.dco.uscg.mil/', tags: ['local_res', 'high_tier', 'us_friendly'] },
    { id: 'CA', name: '加拿大', en: 'Canada', flag: '🇨🇦', link: 'https://tc.canada.ca/', tags: ['local_res', 'high_tier', 'region_alaska'] },
    { id: 'VC', name: '圣文森特', en: 'St. Vincent', flag: '🇻🇨', link: 'http://www.svg-marad.com/', tags: ['allow_cn', 'carib', 'cheap', 'region_carib'] },
    { id: 'BZ', name: '伯利兹', en: 'Belize', flag: '🇧🇿', link: 'https://www.immarbe.com/', tags: ['allow_cn', 'cheap', 'region_carib'] },
    { id: 'AG', name: '安提瓜', en: 'Antigua', flag: '🇦🇬', link: 'https://www.abregistry.ag/', tags: ['carib', 'high_tier'] },
    { id: 'BS', name: '巴哈马', en: 'Bahamas', flag: '🇧🇸', link: 'https://www.bahamasmaritime.com/', tags: ['high_tier', 'carib', 'us_friendly'] },
    
    // 欧洲
    { id: 'PL', name: '波兰', en: 'Poland', flag: '🇵🇱', link: 'https://rejestracjalodzi.pl/', tags: ['allow_cn', 'eu', 'cheap', 'region_riviera', 'region_greece', 'diy_friendly'] },
    { id: 'MT', name: '马耳他', en: 'Malta', flag: '🇲🇹', link: 'https://www.transport.gov.mt/', tags: ['eu', 'high_tier', 'region_riviera', 'region_greece', 'region_turkey'] },
    { id: 'GB', name: '英国 (Part 1)', en: 'UK', flag: '🇬🇧', link: 'https://www.gov.uk/register-a-boat', tags: ['high_tier', 'global', 'red_ensign'] },
    { id: 'JE', name: '泽西岛', en: 'Jersey', flag: '🇯🇪', link: 'https://www.ports.je/', tags: ['high_tier', 'red_ensign', 'region_riviera'] },
    { id: 'GG', name: '根西岛', en: 'Guernsey', flag: '🇬🇬', link: 'http://www.guernseyregistry.com/', tags: ['high_tier', 'red_ensign', 'region_riviera'] },
    { id: 'IM', name: '马恩岛', en: 'Isle of Man', flag: '🇮🇲', link: 'https://www.iomshipregistry.com/', tags: ['high_tier', 'red_ensign', 'eu_friendly'] },
    { id: 'NL', name: '荷兰 (ICP)', en: 'Netherlands', flag: '🇳🇱', link: 'https://www.watersportverbond.nl/', tags: ['eu', 'cheap', 'region_riviera'] },
    { id: 'SM', name: '圣马力诺', en: 'San Marino', flag: '🇸🇲', link: 'https://www.smsr.sm/', tags: ['eu', 'cheap', 'allow_cn'] },
    { id: 'FR', name: '法国', en: 'France', flag: '🇫🇷', link: 'https://www.mer.gouv.fr/', tags: ['eu', 'local_res', 'high_tier', 'region_riviera'] },
    { id: 'DE', name: '德国', en: 'Germany', flag: '🇩🇪', link: 'https://www.bsh.de/', tags: ['eu', 'local_res', 'high_tier'] },
    { id: 'IT', name: '意大利', en: 'Italy', flag: '🇮🇹', link: 'https://www.guardiacostiera.gov.it/', tags: ['eu', 'local_res', 'region_riviera'] },
    { id: 'ES', name: '西班牙', en: 'Spain', flag: '🇪🇸', link: 'https://www.mitma.gob.es/', tags: ['eu', 'local_res', 'region_riviera'] },
    { id: 'GR', name: '希腊', en: 'Greece', flag: '🇬🇷', link: 'https://www.ynanp.gr/', tags: ['eu', 'local_res', 'region_greece'] },
    { id: 'HR', name: '克罗地亚', en: 'Croatia', flag: '🇭🇷', link: 'https://mmpi.gov.hr/', tags: ['eu', 'local_res', 'region_greece'] },
    { id: 'TR', name: '土耳其', en: 'Turkey', flag: '🇹🇷', link: 'https://www.uab.gov.tr/', tags: ['local_res', 'region_turkey'] },
    { id: 'CY', name: '塞浦路斯', en: 'Cyprus', flag: '🇨🇾', link: 'https://www.dms.gov.cy/', tags: ['eu', 'high_tier', 'region_turkey'] },
    { id: 'SE', name: '瑞典', en: 'Sweden', flag: '🇸🇪', link: 'https://transportstyrelsen.se/', tags: ['eu', 'local_res'] },
    { id: 'NO', name: '挪威', en: 'Norway', flag: '🇳🇴', link: 'https://www.sdir.no/', tags: ['local_res', 'high_tier'] },
    { id: 'GI', name: '直布罗陀', en: 'Gibraltar', flag: '🇬🇮', link: 'https://www.gibraltarship.com/', tags: ['red_ensign', 'high_tier', 'region_riviera'] },

    // 非洲
    { id: 'SC', name: '塞舌尔', en: 'Seychelles', flag: '🇸🇨', link: 'https://www.smsa.sc/', tags: ['allow_cn', 'africa', 'region_zanzibar'] },
    { id: 'LR', name: '利比里亚', en: 'Liberia', flag: '🇱🇷', link: 'https://www.liscr.com/', tags: ['global', 'cheap'] },
];

// --- 状态管理 ---
let state = {
    A: null,
    B: null,
    C: null
};

// --- 初始化渲染 ---
function renderFlags(list) {
    const container = document.getElementById('flags-grid');
    const countDisplay = document.getElementById('count-display');
    container.innerHTML = '';
    
    // 排序：优先显示 FOC (tags 包含 allow_cn 或 cheap)
    const sortedList = [...list].sort((a, b) => {
        const aScore = (a.tags.includes('allow_cn') ? 2 : 0) + (a.tags.includes('cheap') ? 1 : 0);
        const bScore = (b.tags.includes('allow_cn') ? 2 : 0) + (b.tags.includes('cheap') ? 1 : 0);
        return bScore - aScore;
    });
    
    sortedList.forEach(item => {
        const card = document.createElement('a');
        card.className = 'flag-card';
        card.href = item.link;
        card.target = '_blank';
        card.innerHTML = `
            <div class="flag-icon">${item.flag}</div>
            <div class="flag-name">
                ${item.name}
                <span>${item.en}</span>
            </div>
        `;
        container.appendChild(card);
    });

    countDisplay.textContent = `共显示 ${list.length} 个选项`;
}

// 初始显示全部
renderFlags(jurisdictions);

// --- 筛选面板开关 ---
function toggleFilter() {
    const panel = document.getElementById('filter-panel');
    if (!panel.classList.contains('active')) {
        panel.classList.add('active');
        // 显示 Step A
        document.getElementById('step-A').classList.add('visible');
    } else {
        panel.classList.remove('active');
    }
}

// --- 子菜单开关 ---
function toggleSubMenu(id, btn) {
    // 关闭同级的其他子菜单
    const parent = btn.parentElement;
    const subMenus = parent.parentElement.querySelectorAll('.sub-options');
    subMenus.forEach(sub => {
        if (sub.id !== id) sub.classList.remove('show');
    });

    // 切换当前子菜单
    const targetSub = document.getElementById(id);
    targetSub.classList.toggle('show');

    // 按钮样式
    resetSiblingButtons(btn);
    btn.classList.add('parent-active');
    
    // 注意：点击子菜单开关 *不会* 触发下一阶段，必须点击子菜单内的具体项
}

// --- 核心逻辑：选项选择 ---
function handleSelection(step, value, btn) {
    // 1. 更新状态
    state[step] = value;

    // 2. 视觉样式更新
    // 如果是在子菜单里点击的
    const isSubItem = btn.parentElement.classList.contains('sub-options');
    
    if (isSubItem) {
        // 高亮自己
        const subContainer = btn.parentElement;
        Array.from(subContainer.children).forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        // 保持父级按钮高亮 (找到控制该子菜单的按钮)
        const subId = subContainer.id;
        const stepBlock = subContainer.parentElement; // .step-block
        const parentBtn = stepBlock.querySelector(`.has-sub[onclick*="${subId}"]`);
        if (parentBtn) {
             // 重置其他一级按钮
             resetSiblingButtons(parentBtn);
             parentBtn.classList.add('selected'); // 这里用 selected 替代 parent-active 变实心
        }

    } else {
        // 普通一级按钮
        resetSiblingButtons(btn);
        btn.classList.add('selected');
        // 关闭所有同级打开的子菜单
        const stepBlock = btn.closest('.step-block');
        stepBlock.querySelectorAll('.sub-options').forEach(sub => sub.classList.remove('show'));
        stepBlock.querySelectorAll('.parent-active').forEach(b => b.classList.remove('parent-active'));
    }

    // 3. 级联逻辑：如果修改了上游步骤，重置下游状态
    if (step === 'A') {
        resetStep('B');
        resetStep('C');
        revealStep('B'); // 只有 A 完成了，才显示 B
    } else if (step === 'B') {
        resetStep('C');
        revealStep('C'); // 只有 B 完成了，才显示 C
    }

    // 4. 执行筛选
    applyFilters();
}

// 辅助：重置同级按钮样式
function resetSiblingButtons(targetBtn) {
    const parent = targetBtn.parentElement;
    Array.from(parent.children).forEach(child => {
        child.classList.remove('selected');
        child.classList.remove('parent-active');
    });
}

// 辅助：显示步骤块
function revealStep(stepName) {
    const el = document.getElementById(`step-${stepName}`);
    if (el) {
        el.classList.add('visible', 'active-step');
    }
}

// 辅助：重置步骤（清空选择并隐藏）
function resetStep(stepName) {
    state[stepName] = null;
    const block = document.getElementById(`step-${stepName}`);
    
    // 移除激活状态和可见性 (视觉上变回灰色/不可点，或者直接隐藏)
    // 需求是渐进式，如果重选A，建议隐藏 B 和 C 让用户重新选
    block.classList.remove('active-step', 'visible');
    
    // 清除按钮选中态
    block.querySelectorAll('.opt-btn').forEach(b => {
        b.classList.remove('selected', 'parent-active');
    });
    // 关闭子菜单
    block.querySelectorAll('.sub-options').forEach(s => s.classList.remove('show'));
}

// --- 核心算法：筛选逻辑 ---
function applyFilters() {
    const noMoneyMsg = document.getElementById('no-money-message');
    const grid = document.getElementById('flags-grid');

    // 彩蛋处理
    if (state.C === 'no_money') {
        grid.classList.add('hidden');
        noMoneyMsg.style.display = 'block';
        return;
    } else {
        grid.classList.remove('hidden');
        noMoneyMsg.style.display = 'none';
    }

    let results = jurisdictions.filter(item => {
        // --- 规则 A: 身份 ---
        if (state.A) {
            if (state.A === 'cn') {
                // 仅中国护照：允许中国籍、或标记为 allow_cn (方便旗)、或通过公司持有(BVI/Cayman)
                const allowed = item.id === 'CN' || 
                                item.tags.includes('allow_cn') || 
                                item.tags.includes('allow_cn_via_company');
                if (!allowed) return false;
            }
            else if (state.A === 'hk_mo') {
                // 港澳居民：基本除了某些严格本地限制的(如纯内陆无关联)外都行，主要是HK本地优势
                if (item.tags.includes('local_only') && item.id !== 'CN') return false; 
            }
            else if (state.A === 'tw') {
                // 台湾护照：排除 CN
                if (item.id === 'CN') return false;
            }
            else if (state.A.startsWith('foreign_')) {
                // 外籍：排除 CN
                if (item.id === 'CN') return false;
                
                // 区域匹配 (更细致)
                if (state.A === 'foreign_eu' && item.tags.includes('eu')) return true; // 欧洲人容易注册欧盟旗
            }
        }

        // --- 规则 B: 目的 ---
        if (state.B) {
            // 1. 环球
            if (state.B === 'global') {
                // 只要不是纯本地的 (local_only 通常指如内河或极特殊的)
                // 并且一般环球需要方便点
                if (item.tags.includes('local_only')) return false;
            }
            // 2. 所在地领海
            if (state.B === 'local') {
                // 强相关：如果是CN身份且要在CN领海，强推CN/HK
                if (state.A === 'cn' && item.id !== 'CN' && item.id !== 'HK') return false;
            }
            // 3. 具体区域 (强过滤)
            if (state.B.startsWith('region_')) {
                const target = state.B;
                
                // 中国领海 -> 只能中国旗/香港旗 (合规)
                if (target === 'region_cn') {
                    return item.id === 'CN' || item.id === 'HK';
                }
                
                // 检查匹配
                const isDirectMatch = item.tags.includes(target);
                // 辅助匹配：美国区域 -> US Friendly
                const isUSMatch = (target === 'region_florida' || target === 'region_alaska') && item.tags.includes('us_friendly');
                // 辅助匹配：欧洲区域 -> EU Flag 或 Red Ensign (Jersey/Guernsey)
                const isEUMatch = (target === 'region_riviera' || target === 'region_greece') && (item.tags.includes('eu') || item.tags.includes('red_ensign'));
                // 辅助匹配：加勒比 -> Carib
                const isCaribMatch = (target === 'region_carib') && item.tags.includes('carib');

                // 如果不是直接匹配，也不是区域通用大旗，排除
                if (!isDirectMatch && !isUSMatch && !isEUMatch && !isCaribMatch && !item.tags.includes('global')) {
                    return false; 
                }
            }
        }

        // --- 规则 C: 消费 ---
        if (state.C) {
            if (state.C === 'rich') {
                // 只看高端或红旗
                if (!item.tags.includes('high_tier') && !item.tags.includes('us_friendly')) return false;
            }
            if (state.C === 'smart') {
                // 排除极贵的本地税收国，保留 DIY friendly 或 高端但合理的
                // 这里逻辑较宽，主要是排除那些极其麻烦的
            }
            if (state.C === 'budget') {
                // 必须包含 cheap
                if (!item.tags.includes('cheap')) return false;
            }
        }

        return true;
    });

    renderFlags(results);
}