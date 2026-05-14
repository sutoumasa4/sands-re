// ★ DATA — 更新はここを編集してください ★
const SANDS = {
    baseDate: '2026-03-31',
    updateDate: '2026-05-02',
    properties: [
        { id: 1, name: 'CasaBruno', nameShort: 'Bruno', address: '横浜市保土ヶ谷区月見台30-17', access: 'JR横須賀線 保土ヶ谷駅 徒歩9分', structure: '木造 2022年6月', units: 8, layout: '1K×8', yearBuilt: 2022, annualRent: 6039600, monthlyRent: 503300, yield: 8.05, occupancy: 97, acquisitionCost: 75030000, appraisal: null, loan: { balance: 57587188, bank: 'りそな銀行', rate: 1.775, monthlyPayment: 217058, remainYears: 26.25, type: '元利均等', rateType: '変動' }, rentroll: [ { room: '101', layout: '1K/18.73㎡', rent: 56000, fee: 5000, total: 61000, since: '2022.8' }, { room: '102', layout: '1K/18.95㎡', rent: 56000, fee: 5000, total: 61000, since: '2022.9' }, { room: '103', layout: '1K/18.51㎡', rent: 55000, fee: 5000, total: 60300, since: '2024.5' }, { room: '104', layout: '1K/18.40㎡', rent: 57000, fee: 5000, total: 62000, since: '2022.9' }, { room: '201', layout: '1K+ロフト/18.73㎡', rent: 59000, fee: 5000, total: 64000, since: '2023.9' }, { room: '202', layout: '1K+ロフト/18.95㎡', rent: 60000, fee: 5000, total: 65000, since: '2025.5' }, { room: '203', layout: '1K+ロフト/18.51㎡', rent: 59000, fee: 5000, total: 64000, since: '2025.5' }, { room: '204', layout: '1K+ロフト/18.40㎡', rent: 61000, fee: 5000, total: 66000, since: '2026.4' } ] },
        { id: 2, name: 'CasaOvest', nameShort: 'Ovest', address: '横浜市西区西戸部町3丁目271-4', access: '京急本線 戸部駅 徒歩11分', structure: '木造 2024年3月', units: 8, layout: '1K×6 / 1LDK×2', yearBuilt: 2024, annualRent: 7992000, monthlyRent: 666000, yield: 7.35, occupancy: 98, acquisitionCost: 108700000, appraisal: 120000000, bookValueFY25: 108741904, appraisalGainFY25: 11258096, loan: { balance: 103591487, bank: '横浜銀行', rate: 1.500, monthlyPayment: 309159, remainYears: 33, type: '元利均等', rateType: '変動' }, rentroll: [ { room: '101', layout: '1LDK/47.2㎡+ロフト', rent: 119000, fee: 5000, total: 124000, since: '2025.10' }, { room: '102', layout: '1LDK/47.2㎡+ロフト', rent: 118000, fee: 5000, total: 123000, since: '2024.6', note: '更新+4,000' }, { room: '103', layout: '1K/23.60㎡', rent: 69000, fee: 5000, total: 74000, since: '2024.4', until: '2026.4', note: '4/19解約予定' }, { room: '104', layout: '1K/19.87㎡', rent: 60000, fee: 5000, total: 65000, since: '2024.4', note: '更新+3,000' }, { room: '105', layout: '1K/19.87㎡', rent: 62000, fee: 5000, total: 67000, since: '2025.4' }, { room: '201', layout: '1K+ロフト/19.87㎡', rent: 68000, fee: 5000, total: 73000, since: '2026.3' }, { room: '202', layout: '1K+ロフト/19.87㎡', rent: 62000, fee: 5000, total: 67000, since: '2024.4', until: '2026.4', note: '4/19解約予定' }, { room: '203', layout: '1K+ロフト/19.87㎡', rent: 68000, fee: 5000, total: 73000, since: '2026.3' } ] },
        { id: 3, name: 'CasaTerzo', nameShort: 'Terzo', address: '横浜市神奈川区松見町3丁目17-8', access: 'JR横浜線 大口駅 徒歩8分', structure: '木造 2025年2月', units: 9, layout: '1K×9', yearBuilt: 2025, annualRent: 8208000, monthlyRent: 684000, yield: 7.07, occupancy: 98, acquisitionCost: 116100000, appraisal: 127000000, bookValueFY25: 116457085, appraisalGainFY25: 10542915, loan: { balance: 102432465, bank: '横浜銀行', rate: 1.350, monthlyPayment: 313209, remainYears: 34, type: '元利均等', rateType: '3年固定' }, rentroll: [ { room: '101', layout: '1K/18.27㎡', rent: 67000, fee: 5000, total: 72000, since: '2025.9' }, { room: '102', layout: '1K/20.07㎡', rent: 69000, fee: 5000, total: 74000, since: '2025.3' }, { room: '103', layout: '1K/20.35㎡', rent: 71000, fee: 5000, total: 76000, since: '2026.4' }, { room: '201', layout: '1K/18.27㎡', rent: 69000, fee: 5000, total: 74000, since: '2025.3' }, { room: '202', layout: '1K/20.07㎡', rent: 71000, fee: 5000, total: 76000, since: '2025.3' }, { room: '203', layout: '1K/20.35㎡', rent: 72000, fee: 5000, total: 77000, since: '2025.3' }, { room: '301', layout: '1K/18.27㎡', rent: 72000, fee: 5000, total: 77000, since: '2025.3' }, { room: '302', layout: '1K/20.07㎡', rent: 73000, fee: 5000, total: 78000, since: '2025.3' }, { room: '303', layout: '1K/20.35㎡', rent: 75000, fee: 5000, total: 80000, since: '2025.3' } ] },
        { id: 4, name: 'CasaCandai', nameShort: 'Candai', address: '横浜市神奈川区神大寺4丁目23-26', access: '市営ブルーライン 片倉町駅 徒歩6分', structure: '木造 2025年7月', units: 10, layout: '1K×10', yearBuilt: 2025, annualRent: 8268000, monthlyRent: 689000, yield: 7.32, occupancy: 100, acquisitionCost: 112950000, appraisal: null, loan: { balance: 104804000, bank: 'りそな銀行', rate: 1.525, monthlyPayment: 457446, remainYears: 29.33, type: '元金均等', rateType: '固定' }, rentroll: [ { room: '101', layout: '1K/17.34㎡', rent: 64000, fee: 5000, total: 69000, since: '2025.12' }, { room: '102', layout: '1K/17.50㎡', rent: 63000, fee: 4000, total: 67000, since: '2025.11' }, { room: '103', layout: '1K/17.34㎡', rent: 63000, fee: 5000, total: 68000, since: '2025.10' }, { room: '104', layout: '1K/17.46㎡', rent: 60000, fee: 5000, total: 65000, since: '2025.10' }, { room: '105', layout: '1K/17.46㎡', rent: 60000, fee: 5000, total: 65000, since: '2025.9' }, { room: '201', layout: '1K+ロフト/17.34㎡', rent: 70000, fee: 5000, total: 75000, since: '2025.8' }, { room: '202', layout: '1K+ロフト/17.50㎡', rent: 66000, fee: 5000, total: 71000, since: '2025.10' }, { room: '203', layout: '1K+ロフト/17.34㎡', rent: 66000, fee: 5000, total: 71000, since: '2025.9' }, { room: '204', layout: '1K+ロフト/17.46㎡', rent: 64000, fee: 5000, total: 69000, since: '2025.9' }, { room: '205', layout: '1K+ロフト/17.46㎡', rent: 64000, fee: 5000, total: 69000, since: '2025.10' } ] },
        { id: 5, name: 'CasaAltana', nameShort: 'Altana', address: '横浜市港南区港南2丁目5-20', access: '市営ブルーライン 港南中央駅 徒歩5分', structure: '木造 2026年2月', units: 6, layout: '1K×6', yearBuilt: 2026, annualRent: 6000000, monthlyRent: 500000, yield: 7.60, occupancy: 100, acquisitionCost: 78900000, appraisal: null, loan: { balance: 71000000, bank: 'スルガ銀行', rate: 2.250, monthlyPayment: 244791, remainYears: 34.92, type: '元利均等', rateType: '変動' }, rentroll: [ { room: '101', layout: '1K/25.12㎡', rent: 78000, fee: 5000, total: 83000, since: '2026.3' }, { room: '102', layout: '1K/25.40㎡', rent: 77000, fee: 5000, total: 82000, since: '2026.3' }, { room: '103', layout: '1K/25.05㎡', rent: 76000, fee: 5000, total: 81000, since: '2026.3' }, { room: '201', layout: '1K/25.12㎡', rent: 79000, fee: 5000, total: 84000, since: '2026.3' }, { room: '202', layout: '1K/25.40㎡', rent: 79000, fee: 5000, total: 84000, since: '2026.3' }, { room: '203', layout: '1K/25.05㎡', rent: 81000, fee: 5000, total: 86000, since: '2026.3' } ] },
    ],
    // ---- 減価償却（第4期 資産別固定資産減価償却内訳表より）----
    depreciation: [
        { name: 'CasaBruno',  yearBuilt: 2022, acquired: '2022-06', acqBuilding: 46255289, annualDep: 2118575, fy25Dep: 2118575, accumulated: 7944656, remainYears: 18.25 },
        { name: 'CasaOvest',  yearBuilt: 2024, acquired: '2024-03', acqBuilding: 62946527, annualDep: 2895540, fy25Dep: 2895540, accumulated: 5791080, remainYears: 20.00 },
        { name: 'CasaTerzo',  yearBuilt: 2025, acquired: '2025-02', acqBuilding: 76142517, annualDep: 3502465, fy25Dep: 3502465, accumulated: 3940273, remainYears: 20.92 },
        { name: 'CasaCandai', yearBuilt: 2025, acquired: '2025-07', acqBuilding: 57311351, annualDep: 2636321, fy25Dep: 1977241, accumulated: 1977241, remainYears: 21.25 },
        { name: 'CasaAltana', yearBuilt: 2026, acquired: '2026-03', acqBuilding: 41015071, annualDep: 1886688, fy25Dep: 157224,  accumulated: 157224,  remainYears: 22.00 },
    ],
    bm: [
        { name: 'CasaBruno',  units: 8,  mgmt: 228571, ins: 80971, util: 14059, repair: 8146, other: 1000 },
        { name: 'CasaOvest',  units: 8,  mgmt: 228571, ins: 80971, util: 14059, repair: 8146, other: 1000 },
        { name: 'CasaTerzo',  units: 9,  mgmt: 257143, ins: 91093, util: 15817, repair: 9165, other: 1000 },
        { name: 'CasaCandai', units: 10, mgmt: 285714, ins: 101214, util: 17574, repair: 10183, other: 1000 },
        { name: 'CasaAltana', units: 6,  mgmt: 171163, ins: 61077, util: 10548, repair: 6160, other: 960 },
    ],
    lots: [
        { property: 'CasaBruno',  type: '土地', area: 161.37, address: '横浜市保土ヶ谷区月見台30-17',       right: '所有権', taxBase: null },
        { property: 'CasaBruno',  type: '建物', area: 163.68, address: '横浜市保土ヶ谷区月見台30-17',       right: '所有権', taxBase: null },
        { property: 'CasaOvest',  type: '土地', area: 231.57, address: '横浜市西区西戸部町3丁目271-4',      right: '所有権', taxBase: null },
        { property: 'CasaOvest',  type: '建物', area: 217.37, address: '横浜市西区西戸部町3丁目271-4',      right: '所有権', taxBase: null },
        { property: 'CasaTerzo',  type: '土地', area: 92.56,  address: '横浜市神奈川区松見町3丁目17-8',     right: '所有権', taxBase: null },
        { property: 'CasaTerzo',  type: '建物', area: 199.74, address: '横浜市神奈川区松見町3丁目17-8',     right: '所有権', taxBase: null },
        { property: 'CasaCandai', type: '土地', area: 185.00, address: '横浜市神奈川区神大寺4丁目23-26',    right: '所有権', taxBase: null },
        { property: 'CasaCandai', type: '建物', area: 188.06, address: '横浜市神奈川区神大寺4丁目23-26',    right: '所有権', taxBase: null },
        { property: 'CasaAltana', type: '土地', area: 246.17, address: '横浜市港南区港南2丁目5-20',         right: '所有権', taxBase: null },
        { property: 'CasaAltana', type: '建物', area: 156.18, address: '横浜市港南区港南2丁目5-20',         right: '所有権', taxBase: null },
    ],
    workingLoans: [
        { name: '運転資金', bank: '川崎信金', balance: 930000, rate: 2.30, monthly: 11816, remainYears: 7.75, type: '元金均等', rateType: '固定' },
        { name: '運転資金', bank: 'かながわ信金', balance: 940000, rate: 2.30, monthly: 11836, remainYears: 7.83, type: '元金均等', rateType: '固定' },
    ],
    // ---- P/L推移（確定値 第1〜4期 ／ 計画値 第5〜6期）----
    // 単位: 百万円
    plHistory: [
        // FY22-25: freee実績。revenue=不動産賃貸収入+更新手数料、operating=営業利益、ordinary=経常利益、netIncome=当期純利益（freee確定）
        { year: 'FY22', period: '第1期', revenue: 3.33,  operating: 0.54, ordinary: 0.28, netIncome: 0.15, depreciation: 1.62, interest: 0.63, units: 8,  realCF: 1.77,  fcf: 0.47, ordinaryRate: 8.4 },
        { year: 'FY23', period: '第2期', revenue: 5.50,  operating: 0.93, ordinary: 0.26, netIncome: 0.13, depreciation: 2.22, interest: 0.85, units: 16, realCF: 2.35,  fcf: 0.74, ordinaryRate: 4.7 },
        { year: 'FY24', period: '第3期', revenue: 13.04, operating: 2.28, ordinary: 0.39, netIncome: 0.23, depreciation: 5.47, interest: 1.97, units: 25, realCF: 5.70,  fcf: 2.30, ordinaryRate: 3.0 },
        { year: 'FY25', period: '第4期', revenue: 25.90, operating: 5.38, ordinary: 1.30, netIncome: 0.94, depreciation: 11.09, interest: 4.66, units: 41, realCF: 12.03, fcf: 8.33, ordinaryRate: 5.0 },
        // ---- 2ND STAGE 予測（FY26〜FY27）----
        // 費用前提: freee全科目準拠。建物維持管理費=売上×5%、広告宣伝費=取得棟×60万+20万、
        //          租税公課=棟×30万、支払報酬料=100万/年、旅費50+通信40+地代20+外注20+諸会費20+交際30+その他20万
        // 利息: 実ローン残高×実金利（既存5棟719万/年+新規9,000万@2%）
        { year: 'FY26予', period: '第5期', revenue: 37.20, operating: 14.96, ordinary: 7.22, netIncome: 5.05, depreciation: 13.49, interest: 7.75, units: 49, realCF: 18.54, fcf: 6.44, ordinaryRate: 19.4, stage: '2ND' },
        { year: 'FY27目', period: '第6期', revenue: 46.25, operating: 17.95, ordinary: 7.56, netIncome: 5.29, depreciation: 17.50, interest: 10.40, units: 65, realCF: 22.79, fcf: 7.29, ordinaryRate: 16.3, stage: '2ND' },
        // ---- 3RD STAGE 予測（FY28〜FY30）---- ※FY28/29は売却益含む当期純利益。役員報酬控除後
        // 役員報酬 = max(0, 経常利益before - 800万)。役員が還流→役員借入金増加。netIncome減 = 役員報酬×0.7
        { year: 'FY28目', period: '第7期', revenue: 52.25, operating: 20.19, ordinary: 8.00, officerSalary: 1.96, netIncome: 18.20, depreciation: 19.60, interest: 12.20, units: 65, realCF: 37.80, fcf: 19.60, ordinaryRate: 15.3, stage: '3RD' },
        { year: 'FY29目', period: '第8期', revenue: 52.25, operating: 20.29, ordinary: 8.00, officerSalary: 1.66, netIncome: 37.10, depreciation: 19.00, interest: 12.30, units: 65, realCF: 56.10, fcf: 38.30, ordinaryRate: 15.3, stage: '3RD' },
        { year: 'FY30目', period: '第9期', revenue: 65.10, operating: 22.79, ordinary: 8.00, officerSalary: 6.67, netIncome:  5.60, depreciation: 22.80, interest: 14.80, units: 81, realCF: 28.40, fcf:  7.10, ordinaryRate: 12.3, stage: '3RD' },
        // ---- 4TH STAGE 予測（FY31〜FY33）---- ※FY32/33は売却益含む当期純利益。役員報酬控除後
        { year: 'FY31目', period: '第10期', revenue: 77.95, operating: 26.09, ordinary: 8.00, officerSalary: 9.68, netIncome:  5.60, depreciation: 27.80, interest: 18.10, units: 97,  realCF: 33.40, fcf:  7.50, ordinaryRate: 10.3, stage: '4TH' },
        { year: 'FY32目', period: '第11期', revenue: 84.35, operating: 28.39, ordinary: 8.00, officerSalary: 9.51, netIncome: 20.30, depreciation: 31.00, interest: 20.40, units: 105, realCF: 51.30, fcf: 23.50, ordinaryRate:  9.5, stage: '4TH' },
        { year: 'FY33目', period: '第12期', revenue: 84.35, operating: 28.89, ordinary: 8.00, officerSalary: 8.41, netIncome: 21.00, depreciation: 31.60, interest: 20.90, units: 105, realCF: 52.60, fcf: 23.90, ordinaryRate:  9.5, stage: '4TH' },
        // ---- 5TH STAGE 予測（FY34〜FY36）---- ※FY36は売却益含む当期純利益。役員報酬控除後
        { year: 'FY34目', period: '第13期', revenue: 90.80, operating: 30.29, ordinary: 8.00, officerSalary:10.69, netIncome:  5.60, depreciation: 34.20, interest: 22.30, units: 113, realCF: 39.80, fcf:  8.20, ordinaryRate:  8.8, stage: '5TH' },
        { year: 'FY35目', period: '第14期', revenue: 97.20, operating: 31.49, ordinary: 8.00, officerSalary:12.62, netIncome:  5.60, depreciation: 36.70, interest: 23.50, units: 121, realCF: 42.30, fcf:  7.90, ordinaryRate:  8.2, stage: '5TH' },
        { year: 'FY36目', period: '第15期', revenue: 84.40, operating: 29.29, ordinary: 8.00, officerSalary: 6.76, netIncome: 24.50, depreciation: 33.50, interest: 21.30, units: 105, realCF: 58.00, fcf: 26.40, ordinaryRate:  9.5, stage: '5TH' },
    ],

    // ---- C/F推移（間接法・概算。B/S変動から逆算し現金増減と整合済み）単位: 万円 ----
    cashFlowHistory: [
        { year: 'FY22', period: '第1期',
          opCF: 170,    // 当期純利益15 + 減価償却162 + 調整△7
          invCF: -7913, // CasaBruno取得（建物・土地・費用含む）
          finCF: 7917,  // 増資900 + 借入6,270 + 役員747
          cashStart: 0, cashEnd: 174,
          invNote: 'CasaBruno取得（保土ヶ谷・8戸）',
        },
        { year: 'FY23', period: '第2期',
          opCF: 235,     // 純利益13 + 償却222
          invCF: -12301, // CasaOvest取得（建物・土地・借入費用等）
          finCF: 12159,  // 銀行借入10,705 + 役員1,454
          cashStart: 174, cashEnd: 267,
          invNote: 'CasaOvest取得（戸部・8戸）',
        },
        { year: 'FY24', period: '第3期',
          opCF: 570,     // 純利益23 + 償却547
          invCF: -12635, // CasaTerzo取得（建物・土地・借入費用等）
          finCF: 12214,  // 銀行借入10,005 + 役員2,209
          cashStart: 267, cashEnd: 416,
          invNote: 'CasaTerzo取得（大口・9戸）',
        },
        { year: 'FY25', period: '第4期',
          opCF: 1203,    // 純利益94 + 償却1,109
          invCF: -19909, // CasaCandai+Altana取得（建物・土地・借入費用等）
          finCF: 20169,  // 銀行借入17,149 + 役員1,820 + 親族1,200
          cashStart: 416, cashEnd: 1879,
          invNote: 'CasaCandai（片倉町・10戸）+ CasaAltana（港南中央・6戸）取得',
        },
    ],

    // ---- B/S推移（確定値 第1〜4期 + ステージ末目標）単位: 万円 ----
    bsHistory: [
        { year: 'FY22', period: '第1期', totalAssets:  7923, equity:  915, longTermLoan:  6270, officerLoan:  725, familyLoan:    0, cash:  174, depAccum:  162 },
        { year: 'FY23', period: '第2期', totalAssets: 19874, equity:  928, longTermLoan: 16975, officerLoan: 1955, familyLoan:    0, cash:  267, depAccum:  377 },
        { year: 'FY24', period: '第3期', totalAssets: 32130, equity:  951, longTermLoan: 26980, officerLoan: 4164, familyLoan:    0, cash:  416, depAccum:  973 },
        { year: 'FY25', period: '第4期', totalAssets: 52449, equity: 1045, longTermLoan: 44129, officerLoan: 5984, familyLoan: 1200, cash: 1879, depAccum: 2040 },
        // ---- 2ND STAGE 予測（FY26〜FY27）----
        // 純資産: FY25実績1,045万 + 累積当期純利益（売却益込み）
        // 長期借入: 前期末+新規取得借入-売却物件ローン返済-年間元金返済
        { year: 'FY26予', stage: '2ND', totalAssets: 62000, equity:  1550, longTermLoan:  52000, officerLoan:  8000, familyLoan: 1000, cash: 2600 },
        { year: 'FY27目', stage: '2ND', totalAssets: 79000, equity:  2079, longTermLoan:  68000, officerLoan: 10000, familyLoan:  800, cash: 1800 },
        // ---- 3RD STAGE 予測（FY28〜FY30）----
        // FY28: Bruno売却→ローン△4,811+新規+9,000。純資産+1,820（役員報酬控除後）。役員借入+196
        { year: 'FY28目', stage: '3RD', totalAssets: 83000, equity:  3899, longTermLoan:  70500, officerLoan: 10196, familyLoan:  600, cash: 4100 },
        // FY29: Ovest+Terzo売却→ローン△18,128+新規+18,000。純資産+3,710（役員報酬控除後）。役員借入+166
        { year: 'FY29目', stage: '3RD', totalAssets: 85000, equity:  7609, longTermLoan:  68600, officerLoan: 10362, familyLoan:  400, cash: 7200 },
        // FY30: 新規+2棟+18,000万。役員借入+667
        { year: 'FY30目', stage: '3RD', totalAssets: 97000, equity:  8169, longTermLoan:  85000, officerLoan: 11029, familyLoan:  200, cash: 4800 },
        // ---- 4TH STAGE 予測（FY31〜FY33）----
        { year: 'FY31目', stage: '4TH', totalAssets:111000, equity:  8729, longTermLoan: 100000, officerLoan: 11997, familyLoan:    0, cash: 2600 },
        // FY32: Candai売却→ローン△8,030+新規+18,000。役員借入+951
        { year: 'FY32目', stage: '4TH', totalAssets:121000, equity: 10759, longTermLoan: 107000, officerLoan: 12948, familyLoan:    0, cash: 3900 },
        // FY33: Altana+FY26棟売却→ローン△13,495+新規+18,000。役員借入+841
        { year: 'FY33目', stage: '4TH', totalAssets:126000, equity: 12859, longTermLoan: 109000, officerLoan: 13789, familyLoan:    0, cash: 5100 },
        // ---- 5TH STAGE 予測（FY34〜FY36）----
        { year: 'FY34目', stage: '5TH', totalAssets:131000, equity: 13419, longTermLoan: 115000, officerLoan: 14858, familyLoan:    0, cash: 5000 },
        { year: 'FY35目', stage: '5TH', totalAssets:136000, equity: 13979, longTermLoan: 120000, officerLoan: 16120, familyLoan:    0, cash: 4900 },
        // FY36: FY27/28/29棟3棟ローン一括返済△36,240+新規+9,000。役員借入+676
        { year: 'FY36目', stage: '5TH', totalAssets:126000, equity: 16429, longTermLoan:  90000, officerLoan: 16796, familyLoan:    0, cash: 8500 },
    ],

    // ---- 月次 B/S（freee 月次推移CSVより） 単位: 万円 ----
    bsMonthly: [
        { month: '2022-05', cash: 600, equity: 600, totalAssets: 619, longTermLoan: 0, officerLoan: 19 },
        { month: '2022-06', cash: 41, equity: 783, totalAssets: 7906, longTermLoan: 6400, officerLoan: 721 },
        { month: '2022-07', cash: 67, equity: 860, totalAssets: 7968, longTermLoan: 6386, officerLoan: 721 },
        { month: '2022-08', cash: 49, equity: 838, totalAssets: 7932, longTermLoan: 6371, officerLoan: 722 },
        { month: '2022-09', cash: 29, equity: 814, totalAssets: 7894, longTermLoan: 6357, officerLoan: 722 },
        { month: '2022-10', cash: 49, equity: 830, totalAssets: 7897, longTermLoan: 6342, officerLoan: 723 },
        { month: '2022-11', cash: 75, equity: 851, totalAssets: 7904, longTermLoan: 6328, officerLoan: 724 },
        { month: '2022-12', cash: 100, equity: 871, totalAssets: 7912, longTermLoan: 6314, officerLoan: 724 },
        { month: '2023-01', cash: 124, equity: 892, totalAssets: 7917, longTermLoan: 6299, officerLoan: 725 },
        { month: '2023-02', cash: 148, equity: 914, totalAssets: 7924, longTermLoan: 6285, officerLoan: 725 },
        { month: '2023-03', cash: 174, equity: 915, totalAssets: 7923, longTermLoan: 6270, officerLoan: 725 },
        { month: '2023-04', cash: 198, equity: 936, totalAssets: 7930, longTermLoan: 6256, officerLoan: 726 },
        { month: '2023-05', cash: 127, equity: 899, totalAssets: 7841, longTermLoan: 6241, officerLoan: 701 },
        { month: '2023-06', cash: 152, equity: 918, totalAssets: 7847, longTermLoan: 6226, officerLoan: 702 },
        { month: '2023-07', cash: 143, equity: 903, totalAssets: 7820, longTermLoan: 6212, officerLoan: 705 },
        { month: '2023-08', cash: 143, equity: 918, totalAssets: 7821, longTermLoan: 6197, officerLoan: 706 },
        { month: '2023-09', cash: 161, equity: 930, totalAssets: 7820, longTermLoan: 6183, officerLoan: 708 },
        { month: '2023-10', cash: 165, equity: 917, totalAssets: 7806, longTermLoan: 6168, officerLoan: 721 },
        { month: '2023-11', cash: 686, equity: 926, totalAssets: 8309, longTermLoan: 6153, officerLoan: 1229 },
        { month: '2023-12', cash: 711, equity: 943, totalAssets: 8314, longTermLoan: 6139, officerLoan: 1232 },
        { month: '2024-01', cash: 735, equity: 962, totalAssets: 8320, longTermLoan: 6124, officerLoan: 1233 },
        { month: '2024-02', cash: 759, equity: 981, totalAssets: 8326, longTermLoan: 6109, officerLoan: 1235 },
        { month: '2024-03', cash: 267, equity: 928, totalAssets: 19874, longTermLoan: 16975, officerLoan: 1955 },
        { month: '2024-04', cash: 156, equity: 848, totalAssets: 19722, longTermLoan: 16938, officerLoan: 1930 },
        { month: '2024-05', cash: 173, equity: 781, totalAssets: 19761, longTermLoan: 16902, officerLoan: 2034 },
        { month: '2024-06', cash: 194, equity: 761, totalAssets: 20217, longTermLoan: 16887, officerLoan: 2540 },
        { month: '2024-07', cash: 135, equity: 780, totalAssets: 24360, longTermLoan: 20330, officerLoan: 3246 },
        { month: '2024-08', cash: 150, equity: 792, totalAssets: 24336, longTermLoan: 20293, officerLoan: 3247 },
        { month: '2024-09', cash: 195, equity: 833, totalAssets: 25343, longTermLoan: 20257, officerLoan: 4247 },
        { month: '2024-10', cash: 2651, equity: 849, totalAssets: 32066, longTermLoan: 27160, officerLoan: 4050 },
        { month: '2024-11', cash: 2693, equity: 895, totalAssets: 32076, longTermLoan: 27124, officerLoan: 4051 },
        { month: '2024-12', cash: 2723, equity: 892, totalAssets: 32075, longTermLoan: 27088, officerLoan: 4089 },
        { month: '2025-01', cash: 2702, equity: 919, totalAssets: 32023, longTermLoan: 27052, officerLoan: 4047 },
        { month: '2025-02', cash: 380, equity: 920, totalAssets: 32046, longTermLoan: 27016, officerLoan: 4106 },
        { month: '2025-03', cash: 466, equity: 951, totalAssets: 32130, longTermLoan: 26980, officerLoan: 4164 },
        { month: '2025-04', cash: 432, equity: 860, totalAssets: 32072, longTermLoan: 26944, officerLoan: 4220 },
        { month: '2025-05', cash: 331, equity: 894, totalAssets: 32399, longTermLoan: 26908, officerLoan: 4563 },
        { month: '2025-06', cash: 1160, equity: 895, totalAssets: 33155, longTermLoan: 26853, officerLoan: 5374 },
        { month: '2025-07', cash: 423, equity: 866, totalAssets: 43679, longTermLoan: 37398, officerLoan: 5379 },
        { month: '2025-08', cash: 463, equity: 845, totalAssets: 43680, longTermLoan: 37444, officerLoan: 5286 },
        { month: '2025-09', cash: 613, equity: 864, totalAssets: 43734, longTermLoan: 37488, officerLoan: 5287 },
        { month: '2025-10', cash: 352, equity: 863, totalAssets: 43445, longTermLoan: 37432, officerLoan: 5106 },
        { month: '2025-11', cash: 428, equity: 964, totalAssets: 43423, longTermLoan: 37417, officerLoan: 5013 },
        { month: '2025-12', cash: 816, equity: 1027, totalAssets: 43713, longTermLoan: 37289, officerLoan: 5365 },
        { month: '2026-01', cash: 921, equity: 1112, totalAssets: 43765, longTermLoan: 37202, officerLoan: 5376 },
        { month: '2026-02', cash: 1631, equity: 1204, totalAssets: 44378, longTermLoan: 37156, officerLoan: 5986 },
        { month: '2026-03', cash: 1879, equity: 1045, totalAssets: 52449, longTermLoan: 44129, officerLoan: 5984 },
    ],

    // ---- 月次 P/L（freee 月次推移CSVより） 単位: 円 ----
    plMonthly: [
        { month: '2022-05', revenue: 0, depreciation: 0, interest: 0, opProfit: 0, ordinaryProfit: 0, netIncome: 0 },
        { month: '2022-06', revenue: 0, depreciation: 0, interest: 0, opProfit: -165310, ordinaryProfit: -165310, netIncome: -165310 },
        { month: '2022-07', revenue: 0, depreciation: 180037, interest: 50630, opProfit: -181800, ordinaryProfit: -232430, netIncome: -232430 },
        { month: '2022-08', revenue: 94001, depreciation: 180037, interest: 73168, opProfit: -193070, ordinaryProfit: -221637, netIncome: -221637 },
        { month: '2022-09', revenue: 232346, depreciation: 180037, interest: 73003, opProfit: -341289, ordinaryProfit: -237392, netIncome: -237392 },
        { month: '2022-10', revenue: 583200, depreciation: 180037, interest: 72838, opProfit: 99240, ordinaryProfit: 161102, netIncome: 161102 },
        { month: '2022-11', revenue: 484000, depreciation: 180037, interest: 72673, opProfit: 279659, ordinaryProfit: 209386, netIncome: 209386 },
        { month: '2022-12', revenue: 484000, depreciation: 180037, interest: 72507, opProfit: 264250, ordinaryProfit: 194143, netIncome: 194143 },
        { month: '2023-01', revenue: 484000, depreciation: 180037, interest: 72342, opProfit: 285949, ordinaryProfit: 216007, netIncome: 216007 },
        { month: '2023-02', revenue: 484000, depreciation: 180037, interest: 72176, opProfit: 287889, ordinaryProfit: 218116, netIncome: 218116 },
        { month: '2023-03', revenue: 484000, depreciation: 180037, interest: 72010, opProfit: 204504, ordinaryProfit: 134894, netIncome: 11394 },
        { month: '2023-04', revenue: 484000, depreciation: 179239, interest: 71844, opProfit: 273696, ordinaryProfit: 204252, netIncome: 204252 },
        { month: '2023-05', revenue: 484000, depreciation: 179239, interest: 71677, opProfit: -301105, ordinaryProfit: -370382, netIncome: -370382 },
        { month: '2023-06', revenue: 484000, depreciation: 179239, interest: 71511, opProfit: 266051, ordinaryProfit: 196940, netIncome: 196940 },
        { month: '2023-07', revenue: 452000, depreciation: 179239, interest: 71344, opProfit: -83236, ordinaryProfit: -152180, netIncome: -152180 },
        { month: '2023-08', revenue: 422000, depreciation: 187489, interest: 71177, opProfit: 155933, ordinaryProfit: 145863, netIncome: 145862 },
        { month: '2023-09', revenue: 422000, depreciation: 187489, interest: 71010, opProfit: 187663, ordinaryProfit: 118753, netIncome: 118753 },
        { month: '2023-10', revenue: 380668, depreciation: 187489, interest: 70843, opProfit: -100001, ordinaryProfit: -124744, netIncome: -124744 },
        { month: '2023-11', revenue: 498969, depreciation: 187489, interest: 70675, opProfit: 116418, ordinaryProfit: 92479, netIncome: 92479 },
        { month: '2023-12', revenue: 484000, depreciation: 187489, interest: 70507, opProfit: 237166, ordinaryProfit: 169059, netIncome: 169059 },
        { month: '2024-01', revenue: 484000, depreciation: 187489, interest: 70339, opProfit: 259062, ordinaryProfit: 191123, netIncome: 191123 },
        { month: '2024-02', revenue: 484000, depreciation: 187489, interest: 70171, opProfit: 256352, ordinaryProfit: 188590, netIncome: 188589 },
        { month: '2024-03', revenue: 417103, depreciation: 187506, interest: 70003, opProfit: -334492, ordinaryProfit: -402395, netIncome: -531095 },
        { month: '2024-04', revenue: 485000, depreciation: 426034, interest: 167227, opProfit: -636574, ordinaryProfit: -801701, netIncome: -801701 },
        { month: '2024-05', revenue: 641372, depreciation: 431876, interest: 163773, opProfit: -562509, ordinaryProfit: -669446, netIncome: -669446 },
        { month: '2024-06', revenue: 868001, depreciation: 431876, interest: 69497, opProfit: -131190, ordinaryProfit: -198587, netIncome: -198587 },
        { month: '2024-07', revenue: 999162, depreciation: 431876, interest: 256982, opProfit: 442650, ordinaryProfit: 187768, netIncome: 187768 },
        { month: '2024-08', revenue: 1118001, depreciation: 431876, interest: 162706, opProfit: 277486, ordinaryProfit: 117077, netIncome: 117047 },
        { month: '2024-09', revenue: 1143000, depreciation: 431876, interest: 162349, opProfit: 569652, ordinaryProfit: 409403, netIncome: 409403 },
        { month: '2024-10', revenue: 1149030, depreciation: 431876, interest: 161992, opProfit: 323244, ordinaryProfit: 163352, netIncome: 163352 },
        { month: '2024-11', revenue: 1151000, depreciation: 431876, interest: 161636, opProfit: 625762, ordinaryProfit: 465062, netIncome: 465062 },
        { month: '2024-12', revenue: 1027000, depreciation: 431876, interest: 161279, opProfit: 122992, ordinaryProfit: -37387, netIncome: -37387 },
        { month: '2025-01', revenue: 1027000, depreciation: 431876, interest: 168372, opProfit: 444168, ordinaryProfit: 276696, netIncome: 276696 },
        { month: '2025-02', revenue: 1027000, depreciation: 431876, interest: 168005, opProfit: 161731, ordinaryProfit: 4133, netIncome: 2678 },
        { month: '2025-03', revenue: 2404999, depreciation: 727900, interest: 167638, opProfit: 639557, ordinaryProfit: 472819, netIncome: 315919 },
        { month: '2025-04', revenue: 1479613, depreciation: 730222, interest: 284719, opProfit: -635465, ordinaryProfit: -916221, netIncome: -916221 },
        { month: '2025-05', revenue: 1710000, depreciation: 730222, interest: 284351, opProfit: 625995, ordinaryProfit: 342604, netIncome: 342604 },
        { month: '2025-06', revenue: 1517661, depreciation: 730222, interest: 283982, opProfit: 299079, ordinaryProfit: 15697, netIncome: 15697 },
        { month: '2025-07', revenue: 1714000, depreciation: 961708, interest: 335492, opProfit: 39562, ordinaryProfit: -295330, netIncome: -295330 },
        { month: '2025-08', revenue: 1681767, depreciation: 964582, interest: 425295, opProfit: 101448, ordinaryProfit: -207773, netIncome: -208458 },
        { month: '2025-09', revenue: 1887100, depreciation: 964582, interest: 444152, opProfit: 630091, ordinaryProfit: 186373, netIncome: 186354 },
        { month: '2025-10', revenue: 2214771, depreciation: 975745, interest: 421680, opProfit: 323754, ordinaryProfit: -9626, netIncome: -9626 },
        { month: '2025-11', revenue: 3144924, depreciation: 975745, interest: 227127, opProfit: 1081738, ordinaryProfit: 1009977, netIncome: 1009977 },
        { month: '2025-12', revenue: 2581900, depreciation: 975745, interest: 645182, opProfit: 1235470, ordinaryProfit: 634588, netIncome: 634588 },
        { month: '2026-01', revenue: 2529000, depreciation: 975745, interest: 423816, opProfit: 1270171, ordinaryProfit: 846655, netIncome: 846655 },
        { month: '2026-02', revenue: 2529000, depreciation: 975745, interest: 227257, opProfit: 1147600, ordinaryProfit: 924810, netIncome: 924173 },
        { month: '2026-03', revenue: 2907565, depreciation: 1133019, interest: 656903, opProfit: -738694, ordinaryProfit: -1229365, netIncome: -1589707 },
    ],
};

const fmt = {
    man: (yen) => Math.round(yen / 10000).toLocaleString() + '万',
    pct: (v, d=1) => v.toFixed(d) + '%',
    comma: (n) => Math.round(n).toLocaleString(),
};

// ========== 入居状況・稼働率ヘルパー ==========
const OCCUPANCY_KEY = 'sands_occupancy';

function loadOccupancyOverrides() {
    try { return JSON.parse(localStorage.getItem(OCCUPANCY_KEY) || '{}'); } catch(e) { return {}; }
}
function saveOccupancyOverrides(data) {
    localStorage.setItem(OCCUPANCY_KEY, JSON.stringify(data));
}
function parseYYYYM(str) {
    if (!str) return null;
    const parts = str.split('.');
    const y = parseInt(parts[0]), m = parseInt(parts[1]);
    if (!y || !m) return null;
    return new Date(y, m - 1, 1);
}
function getRoomStatus(propId, room, today) {
    const overrides = loadOccupancyOverrides();
    const key = `${propId}-${room.room}`;
    const ov = overrides[key];
    const untilStr = (ov && ov.until !== undefined) ? ov.until : (room.until || null);
    const sinceStr = (ov && ov.since !== undefined) ? ov.since : (room.since || null);
    const since = parseYYYYM(sinceStr);
    const until = parseYYYYM(untilStr);
    if (!since) return 'vacant';
    if (until && until <= today) return 'vacant';
    if (until) {
        const soon = new Date(today);
        soon.setMonth(soon.getMonth() + 2);
        if (until <= soon) return 'leaving-soon';
    }
    return 'occupied';
}
function calculateOccupancy(property) {
    const today = new Date();
    const occupied = property.rentroll.filter(r => {
        const s = getRoomStatus(property.id, r, today);
        return s === 'occupied' || s === 'leaving-soon';
    }).length;
    return Math.round(occupied / property.units * 100);
}
function getRoomStatusBadge(status) {
    const styles = {
        'occupied':     'background:#d1fae5;color:#065f46',
        'leaving-soon': 'background:#fef3c7;color:#92400e',
        'vacant':       'background:#fee2e2;color:#991b1b',
    };
    const labels = { 'occupied': '🟢 入居中', 'leaving-soon': '🟡 退去予定', 'vacant': '🔴 空室' };
    return `<span style="display:inline-block;padding:2px 8px;border-radius:10px;${styles[status]||''};font-size:10px;font-weight:700">${labels[status]||''}</span>`;
}
// 退去日・入居日を更新してローカルに保存し再描画
function setRoomOccupancy(propId, roomNum, field, val) {
    const overrides = loadOccupancyOverrides();
    const key = `${propId}-${roomNum}`;
    if (!overrides[key]) overrides[key] = {};
    if (val) { overrides[key][field] = val; }
    else { delete overrides[key][field]; }
    if (Object.keys(overrides[key]).length === 0) delete overrides[key];
    saveOccupancyOverrides(overrides);
    if (typeof renderRentRoll === 'function') renderRentRoll();
    if (typeof renderPropertyGrid === 'function') renderPropertyGrid();
    if (typeof renderRentTable === 'function') renderRentTable();
}
// インライン編集フォームをトグル
function toggleOccupancyEdit(propId, roomNum, currentUntil) {
    const existing = document.getElementById(`occ-edit-${propId}-${roomNum}`);
    if (existing) { existing.remove(); return; }
    const badge = document.getElementById(`occ-badge-${propId}-${roomNum}`);
    if (!badge) return;
    const form = document.createElement('div');
    form.id = `occ-edit-${propId}-${roomNum}`;
    form.style.cssText = 'margin-top:4px;background:#fff;border:1px solid #d1d5db;border-radius:6px;padding:8px;box-shadow:0 2px 8px rgba(0,0,0,0.12);position:relative;z-index:10;min-width:180px';
    form.innerHTML = `
        <div style="font-size:10px;color:#6b7280;margin-bottom:4px">退去予定日（YYYY.M）</div>
        <div style="display:flex;gap:4px;align-items:center">
            <input id="occ-until-${propId}-${roomNum}" type="text" placeholder="例: 2026.6"
                value="${currentUntil||''}"
                style="width:90px;padding:3px 6px;border:1px solid #d1d5db;border-radius:4px;font-size:11px">
            <button onclick="setRoomOccupancy(${propId},'${roomNum}','until',document.getElementById('occ-until-${propId}-${roomNum}').value||null);document.getElementById('occ-edit-${propId}-${roomNum}')?.remove()"
                style="padding:3px 8px;background:#1a3d6e;color:#fff;border:none;border-radius:4px;font-size:10px;cursor:pointer">保存</button>
            <button onclick="setRoomOccupancy(${propId},'${roomNum}','until',null);document.getElementById('occ-edit-${propId}-${roomNum}')?.remove()"
                style="padding:3px 6px;background:#fee2e2;color:#991b1b;border:none;border-radius:4px;font-size:10px;cursor:pointer">クリア</button>
        </div>`;
    badge.parentNode.insertBefore(form, badge.nextSibling);
}

function renderPropertyGrid() {
    const grid = document.getElementById('propertyGrid');
    if (!grid) return;
    const colors = ['#1a3d6e','#2e7cb8','#0e8c6c','#7b2d8b','#c94a1a'];

    const thead = `<thead><tr style="background:#1a3d6e;color:#fff;font-size:11px">
        <th style="padding:10px 12px;text-align:left;white-space:nowrap;border-right:1px solid rgba(255,255,255,0.15)">物件名</th>
        <th style="padding:10px 12px;text-align:left;min-width:200px;border-right:1px solid rgba(255,255,255,0.15)">所在地 / アクセス</th>
        <th style="padding:10px 12px;text-align:center;border-right:1px solid rgba(255,255,255,0.15)">構造・間取り</th>
        <th style="padding:10px 12px;text-align:right;border-right:1px solid rgba(255,255,255,0.15)">年間収入</th>
        <th style="padding:10px 12px;text-align:right;border-right:1px solid rgba(255,255,255,0.15)">利回り</th>
        <th style="padding:10px 12px;text-align:right;border-right:1px solid rgba(255,255,255,0.15)">取得原価</th>
        <th style="padding:10px 12px;text-align:right;border-right:1px solid rgba(255,255,255,0.15)">鑑定評価額</th>
        <th style="padding:10px 12px;text-align:right;border-right:1px solid rgba(255,255,255,0.15)">借入残高</th>
        <th style="padding:10px 12px;text-align:right;border-right:1px solid rgba(255,255,255,0.15)">LTV</th>
        <th style="padding:10px 12px;text-align:right;border-right:1px solid rgba(255,255,255,0.15)">金利 / 方式</th>
        <th style="padding:10px 12px;text-align:right;border-right:1px solid rgba(255,255,255,0.15)">月次返済</th>
        <th style="padding:10px 12px;text-align:right;border-right:1px solid rgba(255,255,255,0.15)">月次CF<br><span style="font-weight:400;font-size:9px">賃料－返済</span></th>
        <th style="padding:10px 12px;text-align:right">稼働率</th>
    </tr></thead>`;

    const rows = SANDS.properties.map((p, i) => {
        const ltv = ((p.loan.balance / p.acquisitionCost) * 100).toFixed(1);
        const ltvNum = parseFloat(ltv);
        const ltvColor = ltvNum > 80 ? '#e74c3c' : ltvNum > 60 ? '#e8a020' : '#27ae60';
        const cf = Math.round((p.monthlyRent - p.loan.monthlyPayment) / 10000);
        const cfColor = cf >= 0 ? '#27ae60' : '#e74c3c';
        const border = `border-left:4px solid ${colors[i]}`;
        const bg = i % 2 === 0 ? '#fff' : '#f8fafc';
        const occ = calculateOccupancy(p);
        const occColor = occ === 100 ? '#27ae60' : occ >= 90 ? '#e8a020' : '#e74c3c';
        return `<tr style="background:${bg};font-size:12px;border-bottom:1px solid #e5e7eb">
            <td style="padding:12px;font-weight:700;${border};white-space:nowrap">${p.nameShort}<br><span style="font-size:10px;font-weight:400;color:#6b7280">${p.name}</span></td>
            <td style="padding:12px;font-size:11px;color:#374151">📍 ${p.address}<br><span style="color:#6b7280">🚃 ${p.access}</span></td>
            <td style="padding:12px;text-align:center;font-size:11px;white-space:nowrap">${p.structure}<br>${p.layout}（${p.units}戸）</td>
            <td style="padding:12px;text-align:right;font-weight:700;color:#27ae60;white-space:nowrap">${fmt.man(p.annualRent)}<br><span style="font-size:10px;font-weight:400;color:#6b7280">${Math.round(p.monthlyRent/10000)}万/月</span></td>
            <td style="padding:12px;text-align:right;font-weight:700">${fmt.pct(p.yield)}</td>
            <td style="padding:12px;text-align:right;white-space:nowrap">${fmt.man(p.acquisitionCost)}</td>
            <td style="padding:12px;text-align:right;white-space:nowrap;color:${p.appraisal ? '#1a3d6e' : '#9ca3af'}">${p.appraisal ? fmt.man(p.appraisal) : '—'}</td>
            <td style="padding:12px;text-align:right;white-space:nowrap">${fmt.man(p.loan.balance)}</td>
            <td style="padding:12px;text-align:right;font-weight:700;color:${ltvColor}">${ltv}%</td>
            <td style="padding:12px;text-align:right;font-size:11px;white-space:nowrap">${p.loan.rate.toFixed(3)}%<br><span style="color:#6b7280">${p.loan.rateType} / ${p.loan.type}</span></td>
            <td style="padding:12px;text-align:right;white-space:nowrap">${fmt.man(p.loan.monthlyPayment)}</td>
            <td style="padding:12px;text-align:right;font-weight:700;color:${cfColor}">${cf >= 0 ? '+' : ''}${cf}万</td>
            <td style="padding:12px;text-align:right">
                <span style="font-weight:700;color:${occColor}">${occ}%</span>
                <div style="background:#e5e7eb;border-radius:3px;height:5px;margin-top:4px;width:60px;margin-left:auto">
                    <div style="background:${occColor};height:5px;border-radius:3px;width:${occ}%"></div>
                </div>
                <a href="#rentroll-${p.id}" onclick="event.preventDefault();document.getElementById('rentroll-${p.id}')?.scrollIntoView({behavior:'smooth',block:'start'})" style="display:block;margin-top:6px;font-size:10px;color:#1a3d6e;text-decoration:none;font-weight:600">📄 レントロール →</a>
            </td>
        </tr>`;
    }).join('');

    // 合計行
    const totalRent = SANDS.properties.reduce((s, p) => s + p.annualRent, 0);
    const totalAcq  = SANDS.properties.reduce((s, p) => s + p.acquisitionCost, 0);
    const totalLoan = SANDS.properties.reduce((s, p) => s + p.loan.balance, 0);
    const totalPay  = SANDS.properties.reduce((s, p) => s + p.loan.monthlyPayment, 0);
    const totalCF   = Math.round((SANDS.properties.reduce((s, p) => s + p.monthlyRent, 0) - totalPay) / 10000);
    const totalLTV  = ((totalLoan / totalAcq) * 100).toFixed(1);
    const tfoot = `<tfoot><tr style="background:#1a3d6e;color:#fff;font-size:12px;font-weight:700">
        <td style="padding:10px 12px" colspan="3">合計 / 平均</td>
        <td style="padding:10px 12px;text-align:right">${fmt.man(totalRent)}</td>
        <td style="padding:10px 12px;text-align:right">${(totalRent / totalAcq * 100).toFixed(2)}%</td>
        <td style="padding:10px 12px;text-align:right">${fmt.man(totalAcq)}</td>
        <td style="padding:10px 12px;text-align:right">—</td>
        <td style="padding:10px 12px;text-align:right">${fmt.man(totalLoan)}</td>
        <td style="padding:10px 12px;text-align:right">${totalLTV}%</td>
        <td style="padding:10px 12px;text-align:right">—</td>
        <td style="padding:10px 12px;text-align:right">${Math.round(totalPay/10000)}万/月</td>
        <td style="padding:10px 12px;text-align:right">${totalCF >= 0 ? '+' : ''}${totalCF}万/月</td>
        <td style="padding:10px 12px;text-align:right">—</td>
    </tr></tfoot>`;

    grid.innerHTML = `<table style="width:100%;border-collapse:collapse;min-width:1000px">${thead}<tbody>${rows}</tbody>${tfoot}</table>`;
}

function renderRentRoll() {
    const container = document.getElementById('rentrollContainer');
    if (!container) return;
    container.innerHTML = '';
    const today = new Date();
    const overrides = loadOccupancyOverrides();

    SANDS.properties.forEach(p => {
        const section = document.createElement('div');
        section.className = 'rentroll-section';
        section.id = `rentroll-${p.id}`;
        section.style.marginBottom = '24px';

        const occ = calculateOccupancy(p);
        const occupiedCount = p.rentroll.filter(r => {
            const s = getRoomStatus(p.id, r, today);
            return s === 'occupied' || s === 'leaving-soon';
        }).length;

        const totalRent  = p.rentroll.reduce((s, r) => s + r.rent,  0);
        const totalFee   = p.rentroll.reduce((s, r) => s + r.fee,   0);
        const totalTotal = p.rentroll.reduce((s, r) => s + r.total, 0);

        const roomRows = p.rentroll.map(r => {
            const areaMatch = r.layout.match(/(\d+\.?\d*)㎡/);
            const sqmPrice  = areaMatch ? Math.round(r.rent / parseFloat(areaMatch[1])).toLocaleString() : '—';
            const status    = getRoomStatus(p.id, r, today);
            const badge     = getRoomStatusBadge(status);

            // Effective until from override or data
            const key = `${p.id}-${r.room}`;
            const ov  = overrides[key];
            const untilStr = (ov && ov.until !== undefined) ? ov.until : (r.until || '');

            const rowBg = status === 'vacant' ? 'background:#fff5f5' : status === 'leaving-soon' ? 'background:#fffbeb' : '';

            return `<tr style="${rowBg}">
                <td class="fw-bold">${r.room}</td>
                <td>${r.layout}</td>
                <td class="text-right">${r.rent.toLocaleString()}</td>
                <td class="text-right text-muted" style="font-size:10px">${sqmPrice}</td>
                <td class="text-right">${r.fee.toLocaleString()}</td>
                <td class="text-right fw-bold">${r.total.toLocaleString()}</td>
                <td class="text-right" style="white-space:nowrap">${r.since || '—'}</td>
                <td style="white-space:nowrap">
                    <div id="occ-badge-${p.id}-${r.room}" style="display:inline-block">
                        ${badge}
                        <button onclick="toggleOccupancyEdit(${p.id},'${r.room}','${untilStr}')"
                            title="退去日を編集"
                            style="margin-left:4px;padding:1px 5px;font-size:9px;border:1px solid #d1d5db;border-radius:4px;background:#f9fafb;cursor:pointer;color:#6b7280">✏️</button>
                    </div>
                </td>
                <td class="text-muted" style="font-size:10px">${untilStr ? '退去: ' + untilStr : (r.note || '')}</td>
            </tr>`;
        }).join('');

        section.innerHTML = `
            <div class="rentroll-header" style="display:flex;justify-content:space-between;align-items:center">
                <span>${p.name}（${p.layout}）　満室想定：月額 ${fmt.man(p.monthlyRent)} ／ 年間 ${fmt.man(p.annualRent)}</span>
                <span style="font-size:12px;font-weight:700;color:${occ===100?'#27ae60':occ>=90?'#e8a020':'#e74c3c'}">
                    稼働率 ${occ}%（${occupiedCount}/${p.units}戸）
                </span>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>部屋</th>
                        <th>間取り・面積</th>
                        <th class="text-right">家賃</th>
                        <th class="text-right">㎡単価</th>
                        <th class="text-right">共益費</th>
                        <th class="text-right">合計</th>
                        <th class="text-right">入居月</th>
                        <th>入居状況</th>
                        <th>備考</th>
                    </tr>
                </thead>
                <tbody>${roomRows}</tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" class="fw-bold">合計</td>
                        <td class="text-right">${totalRent.toLocaleString()}</td>
                        <td></td>
                        <td class="text-right">${totalFee.toLocaleString()}</td>
                        <td class="text-right fw-bold">${totalTotal.toLocaleString()}</td>
                        <td colspan="3"></td>
                    </tr>
                </tfoot>
            </table>`;
        container.appendChild(section);
    });
}

function renderLoanTable() {
    const tbody = document.getElementById('loanTableBody');
    if (!tbody) return;
    SANDS.properties.forEach(l => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="fw-bold">${l.name}</td><td>${l.loan.bank}</td><td class="text-right">${fmt.man(l.loan.balance)}</td><td class="text-right">${l.loan.rate.toFixed(3)}% <span class="badge badge-${l.loan.rateType === '固定' ? 'blue' : 'orange'}" style="font-size:8px">${l.loan.rateType}</span></td><td class="text-right">${fmt.man(l.loan.monthlyPayment)}</td><td class="text-right">${l.loan.remainYears}年</td><td><span class="badge badge-gray">${l.loan.type}</span></td>`;
        tbody.appendChild(tr);
    });
    SANDS.workingLoans.forEach(l => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="text-muted">${l.name}</td><td class="text-muted">${l.bank}</td><td class="text-right text-muted">${fmt.man(l.balance)}</td><td class="text-right text-muted">${l.rate.toFixed(2)}%</td><td class="text-right text-muted">${l.monthly.toLocaleString()}円</td><td class="text-right text-muted">${l.remainYears}年</td><td class="text-muted"><span class="badge badge-gray">${l.type}</span></td>`;
        tbody.appendChild(tr);
    });
}

function renderRentTable() {
    const tbody = document.getElementById('rentTableBody');
    if (!tbody) return;
    SANDS.properties.forEach(p => {
        const cfApprox = Math.round((p.monthlyRent - p.loan.monthlyPayment) / 10000);
        const occ = calculateOccupancy(p);
        const tr = document.createElement('tr');
        tr.innerHTML = `<td class="fw-bold">${p.name}</td><td class="text-right">${Math.round(p.monthlyRent/10000)}万</td><td class="text-right">${fmt.man(p.annualRent)}</td><td class="text-right">${fmt.pct(p.yield)}</td><td class="text-right ${occ === 100 ? 'text-success fw-bold' : ''}">${occ}%</td><td class="text-right ${cfApprox >= 0 ? 'text-success' : 'text-danger'}">${cfApprox >= 0 ? '+' : ''}${cfApprox}万</td>`;
        tbody.appendChild(tr);
    });
}

function renderBSChart() {
    const el = document.getElementById('bsChart'); if (!el) return;
    new Chart(el.getContext('2d'), { type: 'bar', data: { labels: ['資産', '負債・純資産'], datasets: [ { label: '現預金', data: [1879, 0], backgroundColor: '#5dade2' }, { label: '土地', data: [22717, 0], backgroundColor: '#2e7cb8' }, { label: '建物（純額）', data: [26489, 0], backgroundColor: '#1a3d6e' }, { label: 'その他資産', data: [1364, 0], backgroundColor: '#85c1e9' }, { label: '長期借入金', data: [0, 44129], backgroundColor: '#e74c3c' }, { label: '役員・親族借入', data: [0, 7184], backgroundColor: '#e67e22' }, { label: 'その他負債', data: [0, 91], backgroundColor: '#f39c12' }, { label: '純資産', data: [0, 1045], backgroundColor: '#27ae60' } ] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { boxWidth: 10, font: { size: 9 }, padding: 6 } }, tooltip: { callbacks: { label: c => `${c.dataset.label}: ${c.raw.toLocaleString()}万円` } } }, scales: { x: { stacked: true }, y: { stacked: true, ticks: { callback: v => v + '万' } } } } });
}

// 共通ステージ背景バンドプラグイン
// indices 0-3=実績, 4-5=2ND, 6-8=3RD, 9-11=4TH, 12-14=5TH
const stageBandsPlugin = {
    id: 'stageBands',
    beforeDraw(chart) {
        const xScale = chart.scales.x;
        if (!xScale || chart.data.labels.length < 15) return;
        const ctx = chart.ctx;
        const { top, bottom } = chart.chartArea;
        const step = xScale.width / chart.data.labels.length;
        const stages = [
            { label: '1st Stage', from: 0, to: 2, bg: 'rgba(232,160,32,0.08)', fg: 'rgba(180,120,0,0.6)' },
            { label: '2nd Stage', from: 4, to: 5, bg: 'rgba(46,124,184,0.08)', fg: 'rgba(26,80,160,0.6)' },
            { label: '3rd Stage', from: 6, to: 8, bg: 'rgba(39,174,96,0.08)', fg: 'rgba(20,140,70,0.6)' },
            { label: '4th Stage', from: 9, to: 11, bg: 'rgba(155,89,182,0.08)', fg: 'rgba(120,60,160,0.6)' },
            { label: '5th Stage', from: 12, to: 14, bg: 'rgba(231,76,60,0.08)', fg: 'rgba(180,40,30,0.6)' },
        ];
        ctx.save();
        stages.forEach(s => {
            const x0 = xScale.getPixelForValue(s.from) - step * 0.5;
            const x1 = xScale.getPixelForValue(s.to) + step * 0.5;
            const cx = (x0 + x1) / 2;
            // 背景帯
            ctx.fillStyle = s.bg;
            ctx.fillRect(x0, top, x1 - x0, bottom - top);
            // 左境界線
            ctx.strokeStyle = s.fg.replace('0.6', '0.25');
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(x0, top); ctx.lineTo(x0, bottom); ctx.stroke();
            // ステージラベル
            ctx.fillStyle = s.fg;
            ctx.font = 'bold 8px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(s.label, cx, top + 10);
        });
        // FY25（index 3）現在地マーカー
        const xFY25 = xScale.getPixelForValue(3);
        ctx.strokeStyle = 'rgba(220,50,50,0.5)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 3]);
        ctx.beginPath(); ctx.moveTo(xFY25 + step * 0.5, top); ctx.lineTo(xFY25 + step * 0.5, bottom); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(220,50,50,0.7)';
        ctx.font = 'bold 7px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('現在', xFY25, top + 10);
        ctx.restore();
    }
};

function renderPLChart() {
    const el = document.getElementById('plChart'); if (!el) return;
    const isProj = d => d.year.includes('予') || d.year.includes('目');
    const d = SANDS.plHistory;

    // みなし経常利益 = 経常利益 + 役員報酬（FY28〜）
    const deemed     = d.map(x => Math.round((x.ordinary + (x.officerSalary || 0)) * 10) / 10);
    // みなし経常利益率 = みなし経常利益 ÷ 売上高
    const deemedRate = d.map(x => Math.round((x.ordinary + (x.officerSalary || 0)) / x.revenue * 1000) / 10);

    new Chart(el.getContext('2d'), { type: 'bar',
        plugins: [stageBandsPlugin],
        data: {
            labels: d.map(x => x.year),
            datasets: [
                { label: '売上高（百万円）', data: d.map(x => x.revenue), backgroundColor: d.map(x => isProj(x) ? 'rgba(26,61,110,0.35)' : '#1a3d6e'), yAxisID: 'y', borderRadius: 3 },
                { label: '実質CF（百万円）', data: d.map(x => x.realCF), backgroundColor: d.map(x => isProj(x) ? 'rgba(39,174,96,0.25)' : 'rgba(39,174,96,0.6)'), yAxisID: 'y', borderRadius: 3 },
                { label: '経常利益（百万円）', data: d.map(x => x.ordinary), type: 'line', borderColor: '#e8a020', borderDash: [4,3], backgroundColor: 'rgba(232,160,32,0.08)', pointRadius: 3, pointBackgroundColor: d.map(x => isProj(x) ? '#fff' : '#e8a020'), pointBorderColor: '#e8a020', yAxisID: 'y2', tension: 0.3, fill: false },
                { label: 'みなし経常利益（百万円）', data: deemed, type: 'line', borderColor: '#c0392b', backgroundColor: 'rgba(192,57,43,0.1)', pointRadius: 4, pointBackgroundColor: d.map(x => isProj(x) ? '#fff' : '#c0392b'), pointBorderColor: '#c0392b', yAxisID: 'y2', tension: 0.3, fill: false, borderWidth: 2 },
                { label: 'FCF（百万円）', data: d.map(x => x.fcf), type: 'line', borderColor: '#27ae60', borderDash: [4,3], pointRadius: 3, pointBackgroundColor: d.map(x => isProj(x) ? '#fff' : '#27ae60'), pointBorderColor: '#27ae60', yAxisID: 'y2', tension: 0.3, fill: false },
                { label: '経常利益率（%）', data: d.map(x => x.ordinaryRate), type: 'line', borderColor: '#9b59b6', borderDash: [2,2], pointRadius: 2, pointBackgroundColor: '#9b59b6', yAxisID: 'y3', tension: 0.3, fill: false },
                { label: 'みなし経常利益率（%）', data: deemedRate, type: 'line', borderColor: '#1abc9c', backgroundColor: 'rgba(26,188,156,0.08)', pointRadius: 3, pointBackgroundColor: d.map(x => isProj(x) ? '#fff' : '#1abc9c'), pointBorderColor: '#1abc9c', yAxisID: 'y3', tension: 0.3, fill: false, borderWidth: 2 },
            ]
        }, options: { responsive: true, maintainAspectRatio: false,
            layout: { padding: { top: 14 } },
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const v = ctx.raw;
                            if (v === null || v === undefined) return null;
                            const u = ctx.dataset.yAxisID === 'y3' ? '%' : '百万';
                            return `${ctx.dataset.label}: ${v}${u}`;
                        }
                    }
                }
            },
            scales: {
                x: { ticks: { font: { size: 8 }, maxRotation: 45 } },
                y:  { position: 'left',  title: { display: true, text: '売上高・CF（百万）', font: { size: 9 } }, ticks: { font: { size: 9 } } },
                y2: { position: 'right', title: { display: true, text: '利益・FCF（百万）', font: { size: 9 } }, grid: { drawOnChartArea: false }, ticks: { font: { size: 9 } } },
                y3: { position: 'right', title: { display: true, text: '利益率（%）', font: { size: 9 } }, grid: { drawOnChartArea: false }, ticks: { callback: v => v + '%', font: { size: 9 } }, display: true }
            }
        }
    });
}

function renderCFTable() {
    const tbody = document.getElementById('cfTableBody'); if (!tbody) return;
    SANDS.cashFlowHistory.forEach(d => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="fw-bold">${d.year}<br><span style="font-size:10px;font-weight:400;color:var(--text-light)">${d.period}</span></td>
            <td class="text-right text-success fw-bold">+${d.opCF.toLocaleString()}万</td>
            <td class="text-right text-danger fw-bold">${d.invCF.toLocaleString()}万</td>
            <td class="text-right fw-bold" style="color:var(--secondary)">+${d.finCF.toLocaleString()}万</td>
            <td class="text-right fw-bold ${d.cashStart + d.opCF + d.invCF + d.finCF === d.cashEnd ? '' : ''}">${d.cashEnd - d.cashStart >= 0 ? '+' : ''}${(d.cashEnd - d.cashStart).toLocaleString()}万</td>
            <td class="text-right">${d.cashStart.toLocaleString()}万</td>
            <td class="text-right fw-bold">${d.cashEnd.toLocaleString()}万</td>
            <td class="text-muted" style="font-size:10px">${d.invNote}</td>
        `;
        tbody.appendChild(tr);
    });
}

function renderCFChart() {
    const el = document.getElementById('cfChart'); if (!el) return;
    const d = SANDS.cashFlowHistory;
    new Chart(el.getContext('2d'), { type: 'bar', data: {
        labels: d.map(x => x.year),
        datasets: [
            { label: '営業CF', data: d.map(x => x.opCF), backgroundColor: '#27ae60', borderRadius: 4, stack: 's' },
            { label: '財務CF', data: d.map(x => x.finCF), backgroundColor: '#2e7cb8aa', borderRadius: 4, stack: 's' },
            { label: '投資CF', data: d.map(x => x.invCF), backgroundColor: '#e74c3c88', borderRadius: 4, stack: 's' },
        ]
    }, options: { responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } },
        scales: { x: { stacked: true }, y: { stacked: true, ticks: { callback: v => v + '万', font: { size: 10 } } } }
    }});
}

function renderCFWaterfall() {
    const el = document.getElementById('cfCashChart'); if (!el) return;
    const d = SANDS.cashFlowHistory;
    new Chart(el.getContext('2d'), { type: 'bar', data: {
        labels: d.map(x => x.year),
        datasets: [
            { label: '期末現預金（万円）', data: d.map(x => x.cashEnd), backgroundColor: ['#1a3d6e', '#2e7cb8', '#0e8c6c', '#27ae60'], borderRadius: 6 }
        ]
    }, options: { responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { ticks: { callback: v => v + '万', font: { size: 10 } } } }
    }});
}

function renderBSTrendChart() {
    const el = document.getElementById('bsTrendChart'); if (!el) return;
    const b = SANDS.bsHistory;
    new Chart(el.getContext('2d'), { type: 'bar', data: {
        labels: b.map(d => d.year),
        datasets: [
            { label: '長期借入金', data: b.map(d => d.longTermLoan), backgroundColor: '#e74c3c88', borderRadius: 4 },
            { label: '役員借入金', data: b.map(d => d.officerLoan), backgroundColor: '#e67e2288', borderRadius: 4 },
            { label: '純資産', data: b.map(d => d.equity), backgroundColor: '#27ae6088', borderRadius: 4 },
        ]
    }, options: { responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } },
        scales: { x: { stacked: true }, y: { stacked: true, ticks: { callback: v => v + '万', font: { size: 10 } } } }
    }});
}

function renderEquityTrendChart() {
    const el = document.getElementById('equityTrendChart'); if (!el) return;
    const isProj = d => !!d.stage;
    const actuals = SANDS.bsHistory.filter(d => !isProj(d));
    const projs   = SANDS.bsHistory.filter(d => isProj(d));
    const last    = actuals[actuals.length - 1];
    const allLabels = [...actuals.map(d => d.year), ...projs.map(d => d.year)];

    // 実績ライン
    const actualAssets = actuals.map(d => d.totalAssets);
    const actualEquity = actuals.map(d => d.equity);
    // 予測ライン（last実績→予測を破線でブリッジ）
    const projAssets = [...actuals.map((_, i) => i === actuals.length-1 ? last.totalAssets : null), ...projs.map(d => d.totalAssets)];
    const projEquity = [...actuals.map((_, i) => i === actuals.length-1 ? last.equity : null), ...projs.map(d => d.equity)];

    // 債務償還年数（銀行借入 ÷ (経常利益×0.7+減価償却)）— P/Lテーブル確定値
    const debtRepayMap = {
        'FY22':38.7, 'FY23':80.6, 'FY24':54.6, 'FY25':36.6,
        'FY26予':28.6, 'FY27目':30.5, 'FY28目':28.0, 'FY29目':27.9, 'FY30目':29.9,
        'FY31目':29.9, 'FY32目':29.2, 'FY33目':29.3,
        'FY34目':28.9, 'FY35目':28.4, 'FY36目':23.0,
    };
    const debtRepay = allLabels.map(yr => debtRepayMap[yr] ?? null);

    // 自己資本比率 = equity / totalAssets × 100
    const allBS = [...actuals, ...projs];
    const equityRatio = allLabels.map(yr => {
        const bs = allBS.find(d => d.year === yr);
        if (!bs || !bs.totalAssets) return null;
        return Math.round(bs.equity / bs.totalAssets * 1000) / 10;
    });

    const isActual = yr => !yr.includes('予') && !yr.includes('目');

    new Chart(el.getContext('2d'), { type: 'line',
        plugins: [stageBandsPlugin],
        data: {
            labels: allLabels,
            datasets: [
                { label: '総資産（実績）', data: [...actualAssets, ...Array(projs.length).fill(null)], borderColor: '#2e7cb8', backgroundColor: 'rgba(46,124,184,0.06)', fill: true, tension: 0.3, pointRadius: 4, yAxisID: 'y' },
                { label: '総資産（目標）', data: projAssets, borderColor: '#2e7cb8', borderDash: [5,4], pointRadius: 4, pointBackgroundColor: '#fff', pointBorderColor: '#2e7cb8', fill: false, tension: 0.3, spanGaps: true, yAxisID: 'y' },
                { label: '純資産（実績）', data: [...actualEquity, ...Array(projs.length).fill(null)], borderColor: '#27ae60', backgroundColor: 'rgba(39,174,96,0.1)', fill: true, tension: 0.3, pointRadius: 6, pointBackgroundColor: '#27ae60', yAxisID: 'y' },
                { label: '純資産（目標）', data: projEquity, borderColor: '#27ae60', borderDash: [5,4], pointRadius: 4, pointBackgroundColor: '#fff', pointBorderColor: '#27ae60', fill: false, tension: 0.3, spanGaps: true, yAxisID: 'y' },
                { label: '債務償還年数（年）', data: debtRepay,
                  type: 'line', borderColor: '#e74c3c', borderWidth: 2,
                  borderDash: allLabels.map(yr => isActual(yr) ? [] : [4,3]),
                  pointRadius: 4,
                  pointBackgroundColor: allLabels.map(yr => isActual(yr) ? '#e74c3c' : '#fff'),
                  pointBorderColor: '#e74c3c',
                  fill: false, tension: 0.3, spanGaps: false, yAxisID: 'y2' },
                { label: '自己資本比率（%）', data: equityRatio,
                  type: 'line', borderColor: '#9b59b6', borderWidth: 2,
                  borderDash: allLabels.map(yr => isActual(yr) ? [] : [4,3]),
                  pointRadius: 4,
                  pointBackgroundColor: allLabels.map(yr => isActual(yr) ? '#9b59b6' : '#fff'),
                  pointBorderColor: '#9b59b6',
                  fill: false, tension: 0.3, spanGaps: false, yAxisID: 'y3' },
            ]
        }, options: { responsive: true, maintainAspectRatio: false,
            layout: { padding: { top: 14 } },
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } },
                tooltip: {
                    callbacks: {
                        label: ctx => {
                            const v = ctx.raw;
                            if (v === null || v === undefined) return null;
                            if (ctx.dataset.yAxisID === 'y2') return `${ctx.dataset.label}: ${v}年`;
                            if (ctx.dataset.yAxisID === 'y3') return `${ctx.dataset.label}: ${v}%`;
                            return `${ctx.dataset.label}: ${(v/100).toFixed(0)}百万円`;
                        }
                    }
                }
            },
            scales: {
                x:  { ticks: { font: { size: 8 }, maxRotation: 45 } },
                y:  { position: 'left',  title: { display: true, text: '金額（百万円）', font: { size: 9 } }, ticks: { callback: v => (v/100).toFixed(0), font: { size: 9 } } },
                y2: { position: 'right', title: { display: true, text: '債務償還年数（年）', font: { size: 9 } },
                      grid: { drawOnChartArea: false },
                      ticks: { callback: v => v + '年', font: { size: 9 } },
                      min: 0 },
                y3: { position: 'right', title: { display: true, text: '自己資本比率（%）', font: { size: 9 } },
                      grid: { drawOnChartArea: false },
                      ticks: { callback: v => v + '%', font: { size: 9 } },
                      min: 0, max: 35 }
            }
        }
    });
}

function renderLoanProjectionChart() {
    const el = document.getElementById('loanProjectionChart'); if (!el) return;
    const bs = SANDS.bsHistory; // FY22〜FY36（実績＋計画）単位: 万円
    const man2oku = v => Math.round(v / 1000) / 10; // 万→億（1桁）

    // bsHistory そのままラベル化（重複追加しない）
    const allLabels = bs.map(d => d.year);
    const boundary  = bs.findIndex(d => d.stage); // 実績/計画の境目（stageがある最初のインデックス）

    const allAsset  = bs.map(d => man2oku(d.totalAssets));
    const allDebt   = bs.map(d => man2oku(d.longTermLoan + d.officerLoan + (d.familyLoan || 0)));
    const allEquity = bs.map(d => man2oku(d.equity));

    // 実績部分は実線、計画部分（境目-1以降）は破線
    const dashProj = ctx => ctx.p0DataIndex >= boundary - 1 ? [6, 4] : undefined;

    new Chart(el.getContext('2d'), { type: 'line', data: { labels: allLabels, datasets: [
        { label: '不動産資産（億）', data: allAsset,  borderColor: '#2e7cb8', backgroundColor: 'rgba(46,124,184,0.07)', fill: true, tension: 0.3, pointRadius: 3, segment: { borderDash: dashProj } },
        { label: '借入残高（億）',   data: allDebt,   borderColor: '#e74c3c', backgroundColor: 'rgba(231,76,60,0.07)',  fill: true, tension: 0.3, pointRadius: 3, segment: { borderDash: dashProj } },
        { label: '純資産（億）',     data: allEquity, borderColor: '#27ae60', backgroundColor: 'rgba(39,174,96,0.1)',   fill: true, tension: 0.3, pointRadius: 3, borderWidth: 3, segment: { borderDash: dashProj } },
    ]}, options: { responsive: true, maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 10 } } },
            tooltip: { callbacks: { footer: items => items[0].dataIndex < boundary ? '実績値' : '計画値' } }
        },
        scales: {
            x: { ticks: { font: { size: 10 }, maxRotation: 45 } },
            y: { ticks: { callback: v => v + '億', font: { size: 10 } } }
        }
    }});
}

function renderLoanPieChart() {
    const el = document.getElementById('loanPieChart'); if (!el) return;
    new Chart(el.getContext('2d'), { type: 'doughnut', data: { labels: ['りそな銀行', '横浜銀行', 'スルガ銀行', '信用金庫2行'], datasets: [{ data: [16239, 20602, 7100, 187], backgroundColor: ['#1a3d6e','#2e7cb8','#e67e22','#95a5a6'], borderWidth: 2, borderColor: '#fff' }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 10 } } } } } });
}

function renderRentBarChart() {
    const el = document.getElementById('rentBarChart'); if (!el) return;
    new Chart(el.getContext('2d'), { type: 'bar', data: { labels: SANDS.properties.map(p => p.nameShort), datasets: [{ label: '月額賃料（満室・万円）', data: SANDS.properties.map(p => Math.round(p.monthlyRent / 10000)), backgroundColor: ['#1a3d6e','#2e7cb8','#0e8c6c','#7b2d8b','#c94a1a'], borderRadius: 6 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { ticks: { callback: v => v + '万', font: { size: 10 } } } } } });
}

function renderRentTimeChart() {
    const el = document.getElementById('rentTimeChart'); if (!el) return;
    const d = SANDS.plHistory;
    const isProj = x => x.year.includes('予') || x.year.includes('目');
    const actuals = d.filter(x => !isProj(x));
    new Chart(el.getContext('2d'), { type: 'bar', data: {
        labels: d.map(x => x.year),
        datasets: [
            { label: '年間売上高（百万円）', data: d.map(x => x.revenue), backgroundColor: d.map(x => isProj(x) ? 'rgba(26,61,110,0.3)' : '#1a3d6e'), yAxisID: 'y', borderRadius: 3 },
            { label: '戸数（実績）', data: d.map(x => isProj(x) ? null : x.units), type: 'line', borderColor: '#27ae60', pointRadius: 4, pointBackgroundColor: '#27ae60', yAxisID: 'y2', tension: 0.2, fill: false },
            { label: '戸数（目標）', data: d.map((x, i) => { if (isProj(x)) return x.units; if (i < d.length - 1 && isProj(d[i+1])) return x.units; return null; }), type: 'line', borderColor: '#27ae60', borderDash: [5,4], pointRadius: 4, pointBackgroundColor: '#fff', pointBorderColor: '#27ae60', yAxisID: 'y2', tension: 0.2, fill: false },
        ]
    }, options: { responsive: true, maintainAspectRatio: false,
        plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } },
        scales: { x: { ticks: { font: { size: 8 }, maxRotation: 45 } }, y: { position: 'left', title: { display: true, text: '売上高（百万円）', font: { size: 9 } } }, y2: { position: 'right', title: { display: true, text: '戸数', font: { size: 9 } }, grid: { drawOnChartArea: false }, min: 0, max: 120 } }
    }});
}

function renderDepreciation() {
    const tbody = document.getElementById('depreciationTableBody'); if (!tbody) return;
    SANDS.depreciation.forEach(d => { const bv = d.acqBuilding - d.accumulated; const tr = document.createElement('tr'); tr.innerHTML = `<td class="fw-bold">${d.name}</td><td class="text-right">${fmt.man(d.acqBuilding)}</td><td class="text-right text-success">${fmt.man(d.fy25Dep)}</td><td class="text-right text-muted">${fmt.man(d.accumulated)}</td><td class="text-right">${fmt.man(bv)}</td><td class="text-right">${d.remainYears.toFixed(1)}年</td>`; tbody.appendChild(tr); });
}

function renderDepreciationChart() {
    const el = document.getElementById('depreciationChart'); if (!el) return;
    const colors = ['#1a3d6e','#2e7cb8','#0e8c6c','#7b2d8b','#c94a1a'];
    new Chart(el.getContext('2d'), { type: 'bar', data: { labels: SANDS.depreciation.map(d => d.name.replace('Casa','')), datasets: [ { label: 'FY25償却額（万）', data: SANDS.depreciation.map(d => Math.round(d.fy25Dep / 10000)), backgroundColor: colors, borderRadius: 4 }, { label: '累計償却額（万）', data: SANDS.depreciation.map(d => Math.round(d.accumulated / 10000)), backgroundColor: colors.map(c => c + '44'), borderRadius: 4 } ] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } }, scales: { y: { ticks: { callback: v => v + '万', font: { size: 10 } } } } } });
}

function renderRemainingLifeChart() {
    const el = document.getElementById('remainingLifeChart'); if (!el) return;
    const labels = SANDS.depreciation.map(d => d.name.replace('Casa',''));
    new Chart(el.getContext('2d'), { type: 'bar', data: { labels, datasets: [ { label: '経過年数', data: SANDS.depreciation.map(d => 22 - d.remainYears), backgroundColor: '#e74c3c88', borderRadius: 3 }, { label: '残存年数', data: SANDS.depreciation.map(d => d.remainYears), backgroundColor: '#27ae6088', borderRadius: 3 } ] }, options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right', labels: { boxWidth: 10, font: { size: 10 } } } }, scales: { x: { stacked: true, max: 22, ticks: { callback: v => v + '年', font: { size: 10 } } }, y: { stacked: true } } } });
}

function renderBMTable() {
    const tbody = document.getElementById('bmTableBody'); if (!tbody) return;
    SANDS.bm.forEach(b => { const total = b.mgmt + b.ins + b.util + b.repair + b.other; const perUnit = Math.round(total / b.units / 10000 * 10) / 10; const tr = document.createElement('tr'); tr.innerHTML = `<td class="fw-bold">${b.name}</td><td class="text-right">${fmt.man(b.mgmt)}</td><td class="text-right">${fmt.man(b.ins)}</td><td class="text-right">${fmt.man(b.util + b.other)}</td><td class="text-right">${fmt.man(b.repair)}</td><td class="text-right fw-bold">${fmt.man(total)}</td><td class="text-right text-muted">${perUnit}万</td>`; tbody.appendChild(tr); });
}

function renderBMRateTable() {
    const tbody = document.getElementById('bmRateTableBody'); if (!tbody) return;
    SANDS.bm.forEach(b => { const prop = SANDS.properties.find(p => p.name === b.name); const totalBM = (b.mgmt + b.ins + b.util + b.repair + b.other) * 12; const rate = ((totalBM / prop.annualRent) * 100).toFixed(1); const rn = parseFloat(rate); const badge = rn < 4 ? 'badge-green' : rn < 6 ? 'badge-orange' : 'badge-red'; const label = rn < 4 ? '良好' : rn < 6 ? '標準' : '要注意'; const tr = document.createElement('tr'); tr.innerHTML = `<td class="fw-bold">${b.name}</td><td class="text-right">${fmt.man(prop.annualRent)}</td><td class="text-right">${fmt.man(totalBM)}</td><td class="text-right fw-bold">${rate}%</td><td><span class="badge ${badge}">${label}</span></td><td class="text-muted" style="font-size:11px">管理料 + 保険 + 清掃</td>`; tbody.appendChild(tr); });
}

function renderBMChart() {
    const el = document.getElementById('bmChart'); if (!el) return;
    const labels = SANDS.bm.map(b => b.name.replace('Casa',''));
    const toMan = v => Math.round(v / 10000);
    new Chart(el.getContext('2d'), { type: 'bar', data: { labels, datasets: [ { label: '管理料', data: SANDS.bm.map(b => toMan(b.mgmt)), backgroundColor: '#1a3d6e', borderRadius: 2 }, { label: '火災保険', data: SANDS.bm.map(b => toMan(b.ins)), backgroundColor: '#2e7cb8', borderRadius: 2 }, { label: '光熱費・その他', data: SANDS.bm.map(b => toMan(b.util + b.other)), backgroundColor: '#85c1e9', borderRadius: 2 }, { label: '修繕費', data: SANDS.bm.map(b => toMan(b.repair)), backgroundColor: '#e67e22', borderRadius: 2 } ] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { boxWidth: 10, font: { size: 10 } } } }, scales: { x: { stacked: true }, y: { stacked: true, ticks: { callback: v => v + '万', font: { size: 10 } } } } } });
}

function renderLotsTable() {
    const tbody = document.getElementById('lotsTableBody'); if (!tbody) return;
    const propColors = { CasaBruno: '#1a3d6e', CasaOvest: '#2e7cb8', CasaTerzo: '#0e8c6c', CasaCandai: '#7b2d8b', CasaAltana: '#c94a1a' };
    SANDS.lots.forEach(l => { const tsubo = (l.area * 0.3025).toFixed(2); const color = propColors[l.property] || '#666'; const tr = document.createElement('tr'); tr.innerHTML = `<td style="border-left:3px solid ${color}; padding-left:8px; font-weight:600">${l.property}</td><td><span class="badge ${l.type === '土地' ? 'badge-blue' : 'badge-gray'}">${l.type}</span></td><td style="font-size:11px">${l.address}</td><td class="text-right">${l.area.toFixed(2)}</td><td class="text-right text-muted">${tsubo}</td><td><span class="badge badge-green">${l.right}</span></td><td class="text-right text-muted">確認中</td><td class="text-right text-muted">確認中</td>`; tbody.appendChild(tr); });
}

function renderAreaChart() {
    const el = document.getElementById('areaChart'); if (!el) return;
    const propNames = [...new Set(SANDS.lots.map(l => l.property))];
    const landData = propNames.map(n => { const lot = SANDS.lots.find(l => l.property === n && l.type === '土地'); return lot ? lot.area : 0; });
    const buildData = propNames.map(n => { const lot = SANDS.lots.find(l => l.property === n && l.type === '建物'); return lot ? lot.area : 0; });
    new Chart(el.getContext('2d'), { type: 'bar', data: { labels: propNames.map(n => n.replace('Casa','')), datasets: [ { label: '土地面積（㎡）', data: landData, backgroundColor: '#2e7cb8aa', borderRadius: 4 }, { label: '建物面積（㎡）', data: buildData, backgroundColor: '#1a3d6eaa', borderRadius: 4 } ] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } }, scales: { y: { ticks: { callback: v => v + '㎡', font: { size: 10 } } } } } });
}

function renderMonthlyPLChart() {
    const el = document.getElementById('monthlyPLChart');
    if (!el) return;
    const d = SANDS.plMonthly;
    const labels = d.map(m => m.month.replace(/^20/, "'").replace('-', '/'));
    const toMan = v => Math.round(v / 10000);
    // Period boundary lines
    const periods = ['2023-03','2024-03','2025-03','2026-03'].map(p => d.findIndex(m => m.month === p));
    new Chart(el.getContext('2d'), {
        type: 'bar',
        data: {
            labels,
            datasets: [
                { label: '売上高（万円）', data: d.map(m => toMan(m.revenue)), backgroundColor: 'rgba(26,61,110,0.6)', yAxisID: 'y', order: 2 },
                { label: '経常利益（万円）', data: d.map(m => toMan(m.ordinaryProfit)), type: 'line', borderColor: '#e8a020', backgroundColor: 'rgba(232,160,32,0.12)', pointRadius: 2, tension: 0.3, fill: true, yAxisID: 'y2', order: 1 },
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } },
                annotation: {
                    annotations: periods.filter(i => i >= 0).reduce((acc, i, n) => {
                        acc[`line${n}`] = { type: 'line', xMin: i+0.5, xMax: i+0.5, borderColor: 'rgba(200,0,0,0.3)', borderWidth: 1, borderDash: [4,3], label: { content: `期末`, display: true, position: 'start', font: { size: 8 }, color: '#999' } };
                        return acc;
                    }, {})
                }
            },
            scales: {
                x: { ticks: { font: { size: 8 }, maxRotation: 45 } },
                y: { position: 'left', title: { display: true, text: '売上高（万円）', font: { size: 9 } }, beginAtZero: true },
                y2: { position: 'right', title: { display: true, text: '経常利益（万円）', font: { size: 9 } }, grid: { drawOnChartArea: false } }
            }
        }
    });
}

function renderBSMonthlyChart() {
    const el = document.getElementById('bsMonthlyChart');
    if (!el) return;

    // ---- 実績：月次データ（FY22〜FY25） ----
    const monthly = SANDS.bsMonthly;
    const actLabels = monthly.map(m => m.month.replace(/^20/, "'").replace('-', '/'));
    const actN = monthly.length;  // 実績の点数

    // ---- 予測：bsHistory（FY26予〜FY36目）→ 各FY末（翌年3月）の年次点 ----
    // FY26予 = 2027-03末, FY27目 = 2028-03末 ... FY36目 = 2037-03末
    const projBS = SANDS.bsHistory.filter(d => d.stage);
    function fyToMarchLabel(yearStr) {
        const fy = parseInt(yearStr.replace(/[^0-9]/g, ''));
        const yr = 2000 + fy + 1;  // FY26 → 2027年3月
        return `'${String(yr).slice(2)}/03`;
    }
    const projLabels = projBS.map(d => fyToMarchLabel(d.year));

    // 全ラベル：実績月次 + 予測年次
    const allLabels = [...actLabels, ...projLabels];
    const nullAct   = (n) => Array(n).fill(null);

    // 実績部分（月次）＋予測部分（年次）を結合。実績末点→予測へスパン
    const lastActual = monthly[actN - 1];
    const bridge = (actArr, projArr) => [
        ...actArr,
        ...projArr,
    ];

    // 現預金
    const cashAct  = monthly.map(m => m.cash);
    const cashProj = projBS.map(d => d.cash ?? null);

    // 純資産
    const equAct  = monthly.map(m => m.equity);
    const equProj = projBS.map(d => d.equity);

    // 長期借入金
    const loanAct  = monthly.map(m => m.longTermLoan);
    const loanProj = projBS.map(d => d.longTermLoan);

    // 実績/予測の境界インデックス（segment用）
    const boundaryIdx = actN - 1;  // 実績の最後のインデックス

    const isDashed = ctx => ctx.p0DataIndex >= boundaryIdx ? [5, 4] : undefined;
    const isOpen   = (_, i) => i >= actN ? '#fff' : undefined;

    new Chart(el.getContext('2d'), {
        type: 'line',
        data: {
            labels: allLabels,
            datasets: [
                {
                    label: '現預金（万円）',
                    data: bridge(cashAct, cashProj),
                    borderColor: '#2e7cb8',
                    backgroundColor: 'rgba(46,124,184,0.10)',
                    segment: { borderDash: isDashed },
                    pointRadius: ctx => ctx.dataIndex >= actN ? 5 : 1,
                    pointBackgroundColor: ctx => ctx.dataIndex >= actN ? '#fff' : '#2e7cb8',
                    pointBorderColor: '#2e7cb8',
                    tension: 0.3, fill: true, spanGaps: true, yAxisID: 'y',
                },
                {
                    label: '純資産（万円）',
                    data: bridge(equAct, equProj),
                    borderColor: '#27ae60',
                    backgroundColor: 'rgba(39,174,96,0.07)',
                    segment: { borderDash: isDashed },
                    pointRadius: ctx => ctx.dataIndex >= actN ? 5 : 1,
                    pointBackgroundColor: ctx => ctx.dataIndex >= actN ? '#fff' : '#27ae60',
                    pointBorderColor: '#27ae60',
                    tension: 0.3, fill: true, spanGaps: true, yAxisID: 'y',
                },
                {
                    label: '長期借入金（万円）',
                    data: bridge(loanAct, loanProj),
                    borderColor: '#e74c3c',
                    segment: { borderDash: isDashed },
                    pointRadius: ctx => ctx.dataIndex >= actN ? 5 : 0,
                    pointBackgroundColor: ctx => ctx.dataIndex >= actN ? '#fff' : '#e74c3c',
                    pointBorderColor: '#e74c3c',
                    tension: 0.2, fill: false, spanGaps: true, yAxisID: 'y2',
                },
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } },
                tooltip: {
                    callbacks: {
                        title: ctx => {
                            const i = ctx[0].dataIndex;
                            return i >= actN
                                ? `${projBS[i - actN].year} 末（目標）`
                                : allLabels[i];
                        },
                        label: ctx => `${ctx.dataset.label}: ${(ctx.raw ?? 0).toLocaleString()}万`
                    }
                },
                // 実績/目標の境界は破線・白抜き点で視覚区別
            },
            scales: {
                x: { ticks: { font: { size: 8 }, maxRotation: 45, callback: (_, i) => {
                    // 予測部分は全ラベル表示、実績部分は間引く
                    if (i >= actN) return allLabels[i];
                    return i % 6 === 0 ? allLabels[i] : '';
                }}},
                y:  { position: 'left',  title: { display: true, text: '現預金・純資産（万円）', font: { size: 9 } }, beginAtZero: true },
                y2: { position: 'right', title: { display: true, text: '長期借入金（万円）', font: { size: 9 } }, grid: { drawOnChartArea: false }, beginAtZero: true }
            }
        }
    });
}

function renderDashboardMonthlyCF() {
    const el = document.getElementById('dashboardMonthlyCFChart');
    if (!el) return;
    const fy25 = SANDS.plMonthly.filter(m => m.month >= '2025-04' && m.month <= '2026-03');
    const labels = fy25.map(m => m.month.slice(5) + '月');
    const toMan = v => Math.round(v / 10000);
    new Chart(el.getContext('2d'), {
        type: 'bar',
        data: {
            labels,
            datasets: [
                { label: '売上高', data: fy25.map(m => toMan(m.revenue)), backgroundColor: 'rgba(26,61,110,0.55)', yAxisID: 'y', borderRadius: 3 },
                { label: '経常利益', data: fy25.map(m => toMan(m.ordinaryProfit)), type: 'line', borderColor: '#e8a020', backgroundColor: 'rgba(232,160,32,0.15)', pointRadius: 3, tension: 0.3, fill: true, yAxisID: 'y2' },
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { position: 'top', labels: { boxWidth: 10, font: { size: 10 } } } },
            scales: {
                x: { ticks: { font: { size: 9 } } },
                y: { position: 'left', title: { display: true, text: '売上高（万円）', font: { size: 9 } }, beginAtZero: true },
                y2: { position: 'right', title: { display: true, text: '経常利益（万円）', font: { size: 9 } }, grid: { drawOnChartArea: false } }
            }
        }
    });

    // Populate recent 3 months table
    const tbody = document.getElementById('recentMonthsTableBody');
    if (!tbody) return;
    const recent = fy25.slice(-3);
    const bsLookup = Object.fromEntries(SANDS.bsMonthly.map(b => [b.month, b]));
    recent.forEach(m => {
        const bs = bsLookup[m.month] || {};
        const rev = Math.round(m.revenue / 10000);
        const ord = Math.round(m.ordinaryProfit / 10000);
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${m.month.replace('-', '年').replace(/(\d{2})$/, '$1月')}</td><td class="text-right">${rev}万</td><td class="text-right ${ord >= 0 ? 'text-success' : 'text-danger'}">${ord >= 0 ? '+' : ''}${ord}万</td><td class="text-right">${(bs.cash || 0)}万</td><td class="text-right text-success">${(bs.equity || 0)}万</td>`;
        tbody.appendChild(tr);
    });
}

function renderMonthlyPLTable() {
    const tbody = document.getElementById('monthlyPLTableBody');
    if (!tbody) return;
    const fy25 = SANDS.plMonthly.filter(m => m.month >= '2025-04' && m.month <= '2026-03');
    fy25.forEach(m => {
        const rev = Math.round(m.revenue / 10000);
        const ord = Math.round(m.ordinaryProfit / 10000);
        const rate = rev > 0 ? (m.ordinaryProfit / m.revenue * 100).toFixed(1) : '—';
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${m.month.replace('-', '年').replace(/(\d{2})$/, '$1月')}</td><td class="text-right">${rev.toLocaleString()}万</td><td class="text-right ${ord >= 0 ? 'text-success' : 'text-danger'}">${ord >= 0 ? '+' : ''}${ord.toLocaleString()}万</td><td class="text-right ${parseFloat(rate) >= 0 ? '' : 'text-danger'}">${rate}${rate !== '—' ? '%' : ''}</td>`;
        tbody.appendChild(tr);
    });
}

function renderMonthlyRevenueBreakdownChart() {
    const el = document.getElementById('monthlyRevenueBreakdownChart');
    if (!el) return;
    const d = SANDS.plMonthly.filter(m => m.month >= '2024-04');
    const labels = d.map(m => m.month.replace(/^20/, "'").replace('-', '/'));
    const toMan = v => Math.round(v / 10000);
    new Chart(el.getContext('2d'), {
        type: 'bar',
        data: {
            labels,
            datasets: [
                { label: '売上高', data: d.map(m => toMan(m.revenue)), backgroundColor: 'rgba(26,61,110,0.65)', yAxisID: 'y' },
                { label: '減価償却費', data: d.map(m => toMan(m.depreciation)), type: 'line', borderColor: '#8e44ad', borderDash: [4,3], pointRadius: 2, tension: 0.2, fill: false, yAxisID: 'y' },
                { label: '支払利息', data: d.map(m => toMan(m.interest)), type: 'line', borderColor: '#e74c3c', pointRadius: 2, tension: 0.2, fill: false, yAxisID: 'y' },
                { label: '経常利益', data: d.map(m => toMan(m.ordinaryProfit)), type: 'line', borderColor: '#e8a020', backgroundColor: 'rgba(232,160,32,0.1)', pointRadius: 3, tension: 0.3, fill: true, yAxisID: 'y' },
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } },
            scales: {
                x: { ticks: { font: { size: 9 }, maxRotation: 45 } },
                y: { title: { display: true, text: '万円', font: { size: 9 } } }
            }
        }
    });
}

function navScrollTo(e, id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    e.currentTarget.classList.add('active');
}
