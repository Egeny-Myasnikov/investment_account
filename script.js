const list = document.querySelector('.list')
const arr = [
    'ИнтерРАО-ао 1600шт. 3,991₽ 6621,03₽ 6385,60₽ 3,56% 235,43₽',
    'Татнфт-3ао 1шт. 661,5₽ 473,96₽ 661,50₽ 39,57% 187,54₽',
    'АЛЬЯНС-1P1 1шт. 958,38₽ 993,09₽ 958,38₽ 3,50% 34,71₽',
    'Аэрфью-2Р01 1шт. 986,87₽ 969,84₽ 986,87₽ 1,76% 17,03₽',
    'БЭЛТИ-БОП5 1шт. 824,28₽ 860,49₽ 824,28₽ 4,21% 36,22₽',
    'Глобал-Ф1P1 1шт. 1040,89₽ 1169,37₽ 1040,89₽ 10,99% 128,48₽',
    'ИСпетр-1P1 7шт. 94,541429₽ 1434,20₽ 661,79₽ 53,86% 772,41₽',
    'ОФЗ-26207 1шт. 952,82₽ 989,68₽ 952,82₽ 3,72% 36,86₽',
    'ОФЗ-26218 2шт. 872,29₽ 1824,86₽ 1744,58₽ 4,40% 80,28₽',
    'ОФЗ-26238 1шт. 672,4₽ 730,24₽ 672,40₽ 7,92% 57,84₽',
    'ОФЗ-26241 5шт. 896,81₽ 4766,51₽ 4484,05₽ 5,93% 282,46₽',
    'ОФЗ-26242 1шт. 927,73₽ 965,00₽ 927,73₽ 3,86% 37,27₽',
    'РедСофт-2P3 1шт. 1049,79₽ 1130,99₽ 1049,79₽ 7,18% 81,20₽',
    'Ритейл-БФ01 1шт. 506,95₽ 504,78₽ 506,95₽ 0,43% 2,17₽',
    'ЦР-БО-02 1шт. 980,3₽ 1086,88₽ 980,30₽ 9,81% 106,58₽',
    'ETF-AKMB 22шт. 1,357727₽ 29,35₽ 29,87₽ 1,77% 0,52₽',
    'SBGD-ETF 44шт. 18,065₽ 776,84₽ 794,86₽ 2,32% 18,02₽',
    'SBHI-ETF 60шт. 8,438₽ 516,66₽ 506,28₽ 2,01% 10,38₽',
    'TGLD-ETF 32шт. 7,48₽ 219,71₽ 239,36₽ 8,94% 19,65₽',
]

const security = []
arr.forEach((el, i) => {
    const words = el.split(' ')
    security.push({
        id: i + 1,
        title: words[0],
        count: words[1],
        oneCost: words[2],
        buyingPrice: words[3],
        totalCost: words[4],
    })
})

security.map(({ id, title, count, oneCost, buyingPrice, totalCost }) => list.insertAdjacentHTML('beforeend', `
<ul class="items">
<li class="item item__id">${id}</li>
<li class="item item__title">${title}</li>
<li class="item item__count">${count}</li>
<li class="item item__one-cost">${oneCost}</li>
<li class="item item__buying-price">${buyingPrice}</li>
<li class="item item__total-cost">${totalCost}</li>
</ul>
`))