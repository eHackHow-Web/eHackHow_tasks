const cards=[
    {
        title:"Trupti",
        desc:"programmer1",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident assumenda ipsam at cupiditate magnam! Facere, soluta id! A, perferendis.",
    },
    {
        title:"Pranali",
        desc:"programmer2",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident assumenda ipsam at cupiditate magnam! Facere, soluta id! A, perferendis.",
    },
    {
        title:"Pooja",
        desc:"programmer3",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident assumenda ipsam at cupiditate magnam! Facere, soluta id! A, perferendis.",
    },
    {
        title:"Sagar",
        desc:"programmer4",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident assumenda ipsam at cupiditate magnam! Facere, soluta id! A, perferendis.",
    },
    {
        title:"Abhi",
        desc:"programmer5",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident assumenda ipsam at cupiditate magnam! Facere, soluta id! A, perferendis.",
    },
    {
        title:"Chanchal",
        desc:"programmer6",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident assumenda ipsam at cupiditate magnam! Facere, soluta id! A, perferendis.",
    },
    {
        title:"Sanjivani",
        desc:"programmer7",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident assumenda ipsam at cupiditate magnam! Facere, soluta id! A, perferendis.",
    },
    {
        title:"Tushar",
        desc:"programmer8",
        info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident assumenda ipsam at cupiditate magnam! Facere, soluta id! A, perferendis.",
    },
];

document.write(`
<header class="header">
    <div class="wrapper">
        <nav class="navbar">
            </nav>
        <div class="section">
            <div class="container">
            <div class="site_title">
            <h1>eHackHow</h1>
            </div>
                <div class="cards">
                `);
                for(let i=0;i<cards.length;i++){
                document.write(`
                    <div class="card">
                        <div class="card_head">
                            <h1 class="title">${cards[i].title}</h1>
                            <h2 class="desc">${cards[i].desc}</h2>
                        </div>
                        <div class="card_main">
                            <p class="info">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, provident assumenda ipsam at cupiditate magnam! Facere, soluta id! A, perferendis.
                            </p>
                        </div>
                        <div class="card_footer">
                            <ul class="social">
                                <li>
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    `);}
                       document.write(`
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
`);