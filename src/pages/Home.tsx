import Header from "../components/Header";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";

export default function Home() {
    const plans = useMemo(() => ([
        { img: new URL("../assets/images/index/recommend.png", import.meta.url).href, title: "峇里島渡假漫遊", desc: "精選五星級海灘度假村，專屬私人管家服務，讓您徹底放鬆身心。" },
        { img: new URL("../assets/images/index/recommend-1.png", import.meta.url).href, title: "日本深度賞櫻計畫", desc: "春季限定，東京、京都、大阪賞櫻之旅，體驗日本文化的精髓。" },
        { img: new URL("../assets/images/index/recommend-2.png", import.meta.url).href, title: "紐西蘭雪山探險", desc: "探索南島壯麗的自然風光，體驗各種極限運動和戶外活動。" },
        { img: new URL("../assets/images/index/recommend-3.png", import.meta.url).href, title: "摩洛哥迷幻之旅", desc: "漫步沙漠與古城之間，探索千年文化與色彩繽紛的市集風情。" },
    ]), []);

    const hotTrip = useMemo(() => ([
        { img: new URL("../assets/images/index/hotTrip/intro-1.png", import.meta.url).href, title: "ZOBAA 專屬推薦行程", desc: "嚴選深度行程，豐富旅行靈感" },
        { img: new URL("../assets/images/index/hotTrip/intro-2.png", import.meta.url).href, title: "旅人攻略集合",       desc: "景點、交通、私房景點一次掌握" },
        { img: new URL("../assets/images/index/hotTrip/intro-3.png", import.meta.url).href, title: "優惠機票、酒店",     desc: "即時比價，聰明出發不踩雷" },
        { img: new URL("../assets/images/index/hotTrip/intro-4.png", import.meta.url).href, title: "銀行專屬優惠",       desc: "使用指定卡別享受獨家旅遊好康" },
    ]), []);

    const spiriteMaps = useMemo(() => ([
        {
            img: new URL("../assets/images/index/maps/map-1.png", import.meta.url).href,
            tags: ["亞洲","日本京都"],
            title: "走進四季交織的文化時光",
            desc: "穿過紅葉與古寺的交錯，感受從櫻花盛開到秋楓染紅的日式浪漫。",
            suggest: "賞楓最佳時間是 11 月中旬，推薦清水寺和南禪寺一帶 🍁",
            link:"立即探索魅力古都",
        },
        {
            img: new URL("../assets/images/index/maps/map-2.png", import.meta.url).href,
            tags: ["亞洲","南韓首爾"],
            title: "從街邊美食到韓劇場景",
            desc: "白天在弘大小巷探店，夜晚登上南山塔俯瞰整座城市的閃爍。",
            suggest: "弘大周邊週五傍晚最熱鬧，小吃與街頭藝人齊發✨",
            link:"感受韓系風格日常",
        },
        {
            img: new URL("../assets/images/index/maps/map-3.png", import.meta.url).href,
            tags: ["歐洲","法國巴黎"],
            title: "在藝術與咖啡香中迷路",
            desc: "穿梭左岸書店與畫廊，任由麵包香與建築細節擁抱你的步伐。",
            suggest: "走進瑪黑區，最容易與巴黎風格不期而遇 ☕️",
            link:"開啟我的巴黎報險",
        },
        {
            img: new URL("../assets/images/index/maps/map-4.png", import.meta.url).href,
            tags: ["大洋洲","澳洲雪梨"],
            title: "城市與大自然的交會",
            desc: "清晨在海灘做瑜珈，午後漫步歌劇院，享受城市的節奏與野性的呼喚。",
            suggest: "別錯過傍晚在雪梨港看日落＋欣賞歌劇院夜燈 ✨",
            link:"現在就飛向南半球",
        },
        {
            img: new URL("../assets/images/index/maps/map-4.png", import.meta.url).href,
            tags: ["非洲","埃及開羅"],
            title: "穿越千年時光的沙漠冒險",
            desc: "乘著駱駝走過古老遺跡，抬頭仰望太陽神的光芒，在歷史與傳說之間迷失。",
            suggest: "建議早上 8 點前到吉薩金字塔，避開人潮與烈日 ☀️",
            link:"揭開古文明的面紗",
        },
    ]), []);
    const MelbournePlan = useMemo(() => ([
        {
            img: new URL("../assets/images/index/Melbourne/journey-1.png", import.meta.url).href,
            title: "【獨家優惠】布萊頓彩色小屋＋森林蒸汽火車一日遊",
            tags: ["即買即用","5 天前可免費取消"],
            stars:4.2,
            comment:330,
            ordered: 500,
            price:5220,
            specialPrice:4220,
        },
        {
            img: new URL("../assets/images/index/Melbourne/journey-2.png", import.meta.url).href,
            title: "無尾熊動物園＋企鵝歸巢雙享之旅",
            tags: ["即買即用","7 天前可免費取消"],
            stars:4.2,
            comment:330,
            ordered: 500,
            price:4920,
            specialPrice:3890,
        },
        {
            img: new URL("../assets/images/index/Melbourne/journey-3.png", import.meta.url).href,
            title: "大洋路經典一日遊｜中文導覽！體驗澳洲最夢幻的海岸線",
            tags: ["中文導覽","5 天前可免費取消"],
            stars:4.2,
            comment:330,
            ordered: 500,
            price:4500,
            specialPrice:3960,
        },
        {
            img: new URL("../assets/images/index/Melbourne/journey-4.png", import.meta.url).href,
            title: "墨爾本市區導覽｜壁畫巷＋隱藏咖啡廳之旅，體驗本地咖啡文化、隱藏小巷拍照",
            tags: ["專業導覽","3 天前可免費取消"],
            stars:4.2,
            comment:330,
            ordered: 500,
            price:2480,
            specialPrice:1280,
        },
    ]), []);
    const Marquee = useMemo(()=> ([
        "ZOBAA","WHERETOGO","TODAY",
    ]), []);
    const [favorites, setFavorites] = useState<Record<number, boolean>>({});

    return (
        <>
            <Header />

            <main>
                {/* Banner */}
                <section className="banner">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <h2 className="fs-title fs-lg-6 text-primary bg-primary-10 rounded-3 p-2 d-inline-block mb-4 p-lg-5">
                            ZOBAA 旅行推薦平台
                            </h2>
                            <h1 className="text-primary fs-3 fs-lg-1 fs-xl-0">
                            <span className="d-block d-lg-inline"> 用旅行， </span>
                            <span> 收藏世界的樣子 </span>
                            </h1>
                            <p className="fs-subtitle fs-lg-title fs-xl-6 fw-bold text-primary-80 mb-7 mb-lg-10">
                            ZOBAA 整合熱門景點推薦、即時優惠、獨家行程，從比價到訂購，一次完成你的完美出遊計畫。
                            </p>

                            <form className="position-relative navbar-search">
                            <span className="material-symbols-outlined align-bottom position-absolute top-50 start-0 translate-middle-y ps-4 text-neutral-60">
                                search
                            </span>
                            <input
                                type="search"
                                className="form-control rounded-4 py-6 ps-10 border-0 w-100"
                                id="navbar-search"
                                placeholder="搜尋景點、地點或城市"
                            />
                            <button type="button" className="btn btn-primary ctaBtn rounded-6 py-4 px-5">
                                開始探索旅程
                            </button>
                            </form>
                        </div>
                        </div>
                    </div>
                </section>

                {/* 推薦行程 */}
                <section className="recommend py-10">
                    <div className="container text-neutral-white d-lg-flex justify-content-lg-between align-items-lg-center mb-10">
                        <h3 className="mb-3 fs-lg-0">
                        你的<br />專屬推薦
                        </h3>
                        <div>
                        <p className="mb-4">
                            來看我們的精選推薦行程，滿意度高達 99.2% <br />
                            給自己一個難忘的旅遊行程吧！
                        </p>
                        <a href="#">
                            查看全部行程
                            <span className="material-symbols-outlined align-bottom ms-2">arrow_forward</span>
                        </a>
                        </div>
                    </div>

                    <div className="container">
                        <div className="d-flex gap-5 overflow-x-scroll">
                        {plans.map(plan => (
                            <div key={plan.title} className="card text-bg-dark rounded-5 overflow-hidden flex-shrink-0 flex-lg-shrink-1">
                                <img src={plan.img} className="card-img h-100" alt={plan.title} />
                                <div className="card-img-overlay d-flex flex-column justify-content-end">
                                    <h4 className="mb-2">{plan.title}</h4>
                                    <p className="mb-7">{plan.desc}</p>
                                    <button type="button" className="btn btn-light p-6 rounded-pill d-flex d-lg-none justify-content-between">
                                    訂購行程
                                    <span className="material-symbols-outlined align-bottom ms-2">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </section>

                {/* 熱門主題 */}
                <section className="trip">
                    <div className="container">
                        <div className="row flex-lg-row-reverse justify-content-between align-items-lg-center">
                        <div className="col-lg-4 mb-10 d-flex justify-content-lg-end">
                            <div>
                            <h3 className="fs-lg-0 mb-7 text-nowrap">
                                ZOBAA!<br />踏上旅程的<br />第一站
                            </h3>
                            <p className="fw-bold text-primary-60">
                                探索最熱門的旅遊主題，<br />
                                從旅人必備攻略到獨家優惠，<br />
                                全都為你精挑細選。
                            </p>
                            </div>
                        </div>

                        <div className="col-lg-1 d-none d-lg-block" />

                        <div className="col-lg-6">
                            <div className="row">
                            {hotTrip.map((trip, i) => (
                                <div key={trip.title} className={`col-lg-6 ${i > 1 ? "offset-row" : ""}`}>
                                <div className="card mb-5 border-neutral-40 tripCard">
                                    <img src={trip.img} className="card-img-top" alt={trip.title} />
                                    <div className="card-body">
                                    <h4 className="text-nowrap fs-6">{trip.title}</h4>
                                    <p className="text-neutral-80">{trip.desc}</p>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                        </div>

                        </div>
                    </div>
                </section>

                {/* 靈感地圖 */}
                <section className="bg-primary-10 spiriteMap">
                    <div className="container">
                        <div className="d-flex flex-column flex-lg-row justify-content-between gap-6">
                            <div className="position-relative d-inline-block">

                                <h2 className="fs-3 fs-lg-0 position-relative d-inline-block">
                                    今年旅行的
                                    <span className="mt-2 d-block">
                                    靈感地圖
                                    </span>

                                    <div className="d-inline-block tag position-absolute">
                                        <div className="bg-neutral-white shining d-inline-flex gap-1">
                                        <span>ZOBAA 年度榜</span>
                                        <img src="/src/assets/images/index/shining.svg" alt="icon" className="align-baseline" />
                                        </div>
                                        <div className="quarter-circle" />
                                    </div>
                                </h2>

                                <div className="d-flex gap-2 mt-6 overflow-x-scroll">
                                    <input type="radio" className="btn-check" name="options" id="All" autoComplete="off" defaultChecked />
                                    <label className="btn btn-ratio flex-shrink-0" htmlFor="All">全部</label>

                                    <input type="radio" className="btn-check" name="options" id="Asia" autoComplete="off" />
                                    <label className="btn btn-ratio flex-shrink-0" htmlFor="Asia">亞洲</label>

                                    <input type="radio" className="btn-check" name="options" id="Euro" autoComplete="off" />
                                    <label className="btn btn-ratio flex-shrink-0" htmlFor="Euro">歐洲</label>

                                    <input type="radio" className="btn-check" name="options" id="America" autoComplete="off" />
                                    <label className="btn btn-ratio flex-shrink-0" htmlFor="America">美洲</label>

                                    <input type="radio" className="btn-check" name="options" id="Oceania" autoComplete="off" />
                                    <label className="btn btn-ratio flex-shrink-0" htmlFor="Oceania">大洋洲</label>

                                    <input type="radio" className="btn-check" name="options" id="Africa" autoComplete="off" />
                                    <label className="btn btn-ratio flex-shrink-0" htmlFor="Africa">非洲</label>
                                </div>
                            </div>

                            <div className="my-auto">
                                <h4 className="fs-subtitle fs-lg-6 text-lg-end">
                                        來自旅人搜尋、收藏與討論最多的目的地排行榜，
                                    <span className="d-block  mt-lg-2">
                                        一場風格與故事感兼具的靈感旅行，就從這裡開始。
                                    </span>
                                </h4>
                                <div className="d-none d-lg-flex gap-2 justify-content-end mt-6">
                                    <button type="button" className="btn btn-light text-primary rounded-6 p-4">
                                        <span className="material-symbols-outlined align-bottom">
                                            arrow_back
                                        </span>
                                    </button>
                                    <button type="button" className="btn btn-light text-primary rounded-6 p-4">
                                        <span className="material-symbols-outlined align-bottom">
                                            arrow_forward
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex gap-6 overflow-x-scroll py-10 pt-lg-11 pb-lg-12">
                            {spiriteMaps.map((map, i) => (
                                <div key={map.title} className="bg-white card gap-2 gap-lg-9 p-5 px-lg-9 rounded-4 row g-0">
                                    <div className="col-lg-5">
                                        <img src={map.img} className="object-fit-cover w-100 h-100 rounded-4" alt={map.title} />
                                    </div>
                                    
                                    <div className="col-lg-6 d-flex flex-column gap-7 gap-lg-10">
                                        <div className="d-flex flex-column gap-2">
                                            <div className="d-flex gap-2">
                                                {map.tags.map((tag, i) => (
                                                    <p key={i} className="fs-subtitle fs-lg-title fw-bold py-2 px-4 m-0 bg-primary-10 d-inline-block rounded-3" >
                                                        {tag}
                                                    </p>
                                                ))}
                                            </div>

                                            <h3 className="m-0 fs-3 fs-lg-1">{map.title}</h3>
                                            <p className="text-neutral-80 m-0">{map.desc}</p>
                                        </div>
                                        <div className="d-flex flex-column flex-lg-row gap-2 gap-lg-3">
                                            <p className="fs-subtitle fw-bold py-2 px-4 m-0 bg-primary-10 rounded-3 align-self-start text-nowrap">
                                                ZOBAA 建議
                                            </p>
                                            <p className="fs-body2 m-0" style={{height: '42px'}}>{map.suggest}</p>
                                        </div>

                                        <button type="button" className="btn btn-dark py-5 px-6 p-lg-5 rounded-pill d-flex justify-content-between align-items-center fs-subtitle fs-lg-title border-0">
                                        {map.link}
                                            <span className="material-symbols-outlined align-bottom ms-2 bg-light text-dark p-2 rounded-pill">arrow_forward</span>
                                        </button>
                                    </div>
                                    <h6 className="position-absolute mapNum">{i+1}</h6>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </section>

                <section>
                    <div className="container">
                        <section>
                            <h2 className="fs-3 fs-lg-0 m-0">
                                搜尋墨爾本嗎？ <br />
                                來點行程參考！
                            </h2>
                            <div className="d-flex gap-6 overflow-x-scroll my-10 MelbournePlan">
                                {MelbournePlan.map((p,i) => (
                                    <div key={i} className="card gap-7 border-0 row g-0">
                                        
                                        <div className="position-relative">
                                            <img src={p.img} className="object-fit-cover w-100 h-100 rounded-4" alt={p.title} />
                                            <button className="position-absolute end-0 top-0 p-5 favorite-tag border-0" aria-pressed={Boolean(favorites[i])} onClick={()=> setFavorites(p=>({ ...p, [i]: !p[i] }))} >
                                                {favorites[i] ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-1 -1 18 18" className="d-block">
                                                        <path
                                                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15  -7.534 4.736 3.562-3.248 8 1.314Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-1 -1 18 18" className="d-block">
                                                        <path
                                                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"
                                                            fill="none"
                                                            stroke="white"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                )}
                                            </button>
                                        </div>
                                        {/* card-body */}
                                        <div className="d-flex flex-column gap-7 align-items-stretch">
                                            {/* content */}
                                            <div className="d-flex flex-column gap-2 pb-5 border-bottom border-neutral-40">
                                                <h3 className="m-0 fs-title text-black lh-base" style={{ height: "48px" }}>{p.title}</h3>
                                                <div className="d-flex gap-2">
                                                    {p.tags.map((tag, i) => (
                                                        <p key={i} className="fs-body2 py-1 px-2 m-0 bg-primary-10 d-inline-block rounded-3" >
                                                            {tag}
                                                        </p>
                                                    ))}
                                                </div>

                                                <p className="text-neutral-80 fs-body2 m-0 d-flex align-items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" className="bi bi-star-fill d-block align-bottom me-1" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" fill="#F6BD2B"/>
                                                    </svg>
                                                    <span>
                                                        {p.stars}
                                                    </span>

                                                    <span className="text-neutral-60 ms-1">
                                                        ({p.comment})
                                                    </span>

                                                    <span className="ms-4 ps-4 border-start border-neutral-40">
                                                        {p.ordered}+ 個已訂購
                                                    </span>
                                                </p>
                                            </div>
                                            
                                            {/* price */}
                                            <div>
                                                <h4 className="fs-6 m-0">
                                                    NT$ {p.specialPrice.toLocaleString('zh-TW')}
                                                </h4>
                                                <del className="m-0 fs-body2 price text-decoration-line-through">
                                                    NT$ {p.price.toLocaleString('zh-TW')}
                                                </del>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <h3 className="marquee m-0">
                            <div className="marquee-content">
                                {Marquee.concat(Marquee).map((v, i) => (
                                    <span key={i} className="text-primary-10 me-2 d-inline-block">＃ {v}</span>
                                ))}
                            </div>
                        </h3>
                    </div>
                </section>


                <section className="bg-primary-40 choose-cta">
                    <div className="container">
                        <div className="py-10 d-flex flex-column gap-2 gap-lg-7">
                            <section className="rounded-7 imagination fs-3 position-relative">
                                <h2 className="title"># ZOBAAAAA !</h2>
                                <h2 className="subtitle">把旅行變成生活的養分。</h2>
                                <img src="/src/assets/images/index/bg-circle.svg" alt="bg" className="position-absolute bg-circle d-none d-lg-block"/>
                            </section>

                            <section className="bg-primary-10 bg-opacity-50 rounded-7 p-7 choose-content">
                                <div className="d-flex flex-column gap-5 gap-md-7">
                                    <h2 className="fs-5 fs-md-3 fs-xl-2 m-0">為什麼選擇 ZOBAA ?</h2>
                                    <p className="text-neutral-80 fs-body2 m-0">不只是帶你抵達目的地，更在每一次出發前，替你預想所有細節。<br /> ZOBAA 希望你能放心探索世界，把記憶留給旅程本身。</p>
                                </div>

                                <div className="d-flex flex-column flex-md-row gap-5 gap-lg-7">
                                    <div className="bg-white p-7 rounded-4 gap-2 w-100 d-flex flex-column justify-content-center text-nowrap">
                                        <h3 className="d-flex">
                                            8 年
                                            <span className="fs-body1 ms-2 mb-auto">+</span>
                                        </h3>
                                        <p className="text-primary-80 m-0 fw-bold">旅遊企劃經驗</p>
                                    </div>

                                    <div className="bg-white p-7 rounded-4 gap-2 w-100 d-flex flex-column justify-content-center text-nowrap">
                                        <h3 className="d-flex">
                                            30,000
                                            <span className="fs-body1 ms-2 mb-auto">+</span>
                                        </h3>
                                        <p className="text-primary-80 m-0 fw-bold">旅人五星好評</p>
                                    </div>
                                </div>

                                <button type="button" className="btn btn-dark rounded-pill d-flex justify-content-between align-items-center fs-subtitle fs-md-body1 fs-md-6 py-5 px-7 py-md-7 px-md-9">
                                    立即探索我們的精心旅程
                                    <span className="material-symbols-outlined align-bottom ms-2 bg-white text-black fs-body1 p-1 rounded-pill">arrow_forward</span>
                                </button>
                            </section>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}