/* ============================================
   GK CONSTRUCTION — Services & Projects data
   Edit text/numbers here. KA / EN / RU.
============================================ */

const services = [
  {
    id: "design", num: "01", icon: "design",
    ka: {
      title: "პროექტირება",
      tagline: "სანდო ნახაზი — მშენებლობის საფუძველი.",
      shortDesc: "სამუშაო ნახაზები და დიზაინი ნებისმიერი სირთულის შენობისთვის, ესკიზების შემუშავება და რედაქტირება.",
      overview: "პირველ ჩასხმამდე ჩვენ ვამცირებთ რისკს — <strong>არქიტექტურას ვთარგმნით ასაშენებელ, ნორმებთან შესაბამის სტრუქტურულ ნახაზებად</strong>. ზუსტი დოკუმენტაცია ნიშნავს სუფთა მშენებლობას ობიექტზე.",
      capabilities: [
        { t: "სამუშაო ნახაზები", d: "მშენებლობისა და რემონტისთვის შესრულებითი ნახაზები." },
        { t: "ნებისმიერი კატეგორია", d: "დიზაინი შენობის ნებისმიერი სირთულის კატეგორიისთვის." },
        { t: "ესკიზები და რედაქცია", d: "ესკიზური ნახაზები, კორექტირება და რედაქტირება." },
        { t: "გეოდეზიური კონტროლი", d: "ნიშნულების დადგენა და ტოპოგრაფიული კონტროლი." }
      ]
    },
    en: {
      title: "Design & Projecting",
      tagline: "Buildable drawings — the foundation of the build.",
      shortDesc: "Working drawings and design for buildings of every complexity category, plus sketch development and editing.",
      overview: "Before the first pour, we de-risk the build — <strong>translating architecture into buildable, code-compliant structural drawings</strong>. Precise documentation means a clean build on site.",
      capabilities: [
        { t: "Working drawings", d: "Construction and repair drawings ready for execution." },
        { t: "Every complexity category", d: "Design across all building-complexity categories." },
        { t: "Sketches & redlines", d: "Sketch drawings, redlines and editing." },
        { t: "Geodetic control", d: "Geodetic level-setting and topographic control." }
      ]
    },
    ru: {
      title: "Проектирование",
      tagline: "Надёжный чертёж — основа стройки.",
      shortDesc: "Рабочие чертежи и проектирование зданий любой категории сложности, разработка и редактирование эскизов.",
      overview: "До первой заливки мы снижаем риски — <strong>переводим архитектуру в строимые, нормативные конструктивные чертежи</strong>. Точная документация — чистая стройка на объекте.",
      capabilities: [
        { t: "Рабочие чертежи", d: "Чертежи для строительства и ремонта, готовые к исполнению." },
        { t: "Любая категория", d: "Проектирование зданий любой категории сложности." },
        { t: "Эскизы и правки", d: "Эскизные чертежи, корректировка и редактирование." },
        { t: "Геодезический контроль", d: "Установка отметок и топографический контроль." }
      ]
    },
    stats: [
      { ka: "შენობის კატეგორია", en: "Complexity categories", ru: "Категорий сложности", n: "ALL" },
      { ka: "სრული დოკუმენტაცია", en: "Full documentation", ru: "Полная документация", n: "100%" },
      { ka: "ნახაზი / პროექტი", en: "Drawings per project", ru: "Чертежей на проект", n: "BIM" },
      { ka: "ნორმებთან შესაბამისობა", en: "Code-compliant", ru: "Соответствие нормам", n: "100%" }
    ]
  },
  {
    id: "structural", num: "02", icon: "structural",
    ka: {
      title: "მშენებლობა",
      tagline: "მონოლითური კარკასი, რომელიც შენობას ატარებს.",
      shortDesc: "რკინა-ბეტონის სტრუქტურული და არქიტექტურული ელემენტების მშენებლობა მკაცრად პროექტის მიხედვით.",
      overview: "ჩვენი ძირითადი მიმართულება: <strong>მონოლითური კარკასის ჩამოსხმა, რომელიც შენობას ატარებს</strong> — ყალიბი, არმატურა და ბეტონი მკაცრად პროექტის მიხედვით.",
      capabilities: [
        { t: "რკ სტრუქტურული ელემენტები", d: "მზიდი რკინა-ბეტონის კონსტრუქცია." },
        { t: "არქიტექტურული ელემენტები", d: "არქიტექტურული ელემენტები პროექტის ნახაზებით." },
        { t: "ფუნდამენტი და ბირთვი", d: "ფუნდამენტი, ფილები, სვეტები და ბირთვები." },
        { t: "ობიექტის ინფრასტრუქტურა", d: "მზიდი კონსტრუქციის დამხმარე სამუშაოები." }
      ]
    },
    en: {
      title: "Construction",
      tagline: "The monolithic frame that carries the building.",
      shortDesc: "Construction of structural and architectural elements in reinforced concrete, strictly per project.",
      overview: "Our core discipline: <strong>pouring the monolithic frame that carries the building</strong> — formwork, rebar and concrete executed strictly to project.",
      capabilities: [
        { t: "RC structural elements", d: "Reinforced-concrete load-bearing structure." },
        { t: "Architectural elements", d: "Architectural elements per project drawings." },
        { t: "Foundations & cores", d: "Foundations, slabs, columns and cores." },
        { t: "Site infrastructure", d: "Site-supporting infrastructural works." }
      ]
    },
    ru: {
      title: "Строительство",
      tagline: "Монолитный каркас, несущий здание.",
      shortDesc: "Строительство конструктивных и архитектурных элементов из железобетона, строго по проекту.",
      overview: "Наше основное направление: <strong>заливка монолитного каркаса, несущего здание</strong> — опалубка, арматура и бетон строго по проекту.",
      capabilities: [
        { t: "ЖБ конструктив", d: "Несущая железобетонная конструкция." },
        { t: "Архитектурные элементы", d: "Архитектурные элементы по чертежам проекта." },
        { t: "Фундаменты и ядра", d: "Фундаменты, плиты, колонны и ядра." },
        { t: "Инфраструктура объекта", d: "Вспомогательные работы для несущей конструкции." }
      ]
    },
    stats: [
      { ka: "დასრულებული პროექტი", en: "Completed projects", ru: "Завершённых проектов", n: "10+" },
      { ka: "ბლოკი აშენებული", en: "Blocks built", ru: "Блоков построено", n: "12+" },
      { ka: "წამყვანი დეველოპერი", en: "Leading developers", ru: "Ведущих девелоперов", n: "7+" },
      { ka: "სრული ციკლი", en: "Full-cycle scope", ru: "Полный цикл", n: "100%" }
    ]
  },
  {
    id: "infrastructure", num: "03", icon: "infrastructure",
    ka: {
      title: "ინფრასტრუქტურა",
      tagline: "ობიექტის ინჟინერია, რომელიც მთავარ კონსტრუქციას მხარს უჭერს.",
      shortDesc: "ობიექტის ინფრასტრუქტურული და საინჟინრო სამუშაოები — მთავარი კონსტრუქციის მხარდასაჭერად.",
      overview: "მთავარი კონსტრუქციის გარშემო — <strong>ობიექტის საინჟინრო და ინფრასტრუქტურული სამუშაოები</strong>, რომლებიც უზრუნველყოფს მთლიანი ობიექტის გამართულ ფუნქციონირებას.",
      capabilities: [
        { t: "ობიექტის ინჟინერია", d: "საინჟინრო სამუშაოები ობიექტზე." },
        { t: "დამხმარე კონსტრუქცია", d: "მთავარი კონსტრუქციის მხარდამჭერი სამუშაოები." },
        { t: "ტერიტორიის მოწყობა", d: "ობიექტის ტერიტორიის საინჟინრო მოწყობა." },
        { t: "კოორდინაცია", d: "კოორდინაცია მთავარ კონსტრუქციასთან." }
      ]
    },
    en: {
      title: "Infrastructure",
      tagline: "Site engineering that supports the structure.",
      shortDesc: "Execution of infrastructural and site-engineering projects supporting the main structure.",
      overview: "Around the main structure — <strong>site-engineering and infrastructural works</strong> that keep the whole development running.",
      capabilities: [
        { t: "Site engineering", d: "Engineering works on site." },
        { t: "Supporting structures", d: "Works that support the main structure." },
        { t: "Site arrangement", d: "Engineering arrangement of the site." },
        { t: "Coordination", d: "Coordination with the main structure." }
      ]
    },
    ru: {
      title: "Инфраструктура",
      tagline: "Инженерия площадки, поддерживающая конструкцию.",
      shortDesc: "Выполнение инфраструктурных и инженерных работ на площадке в поддержку основной конструкции.",
      overview: "Вокруг основной конструкции — <strong>инженерные и инфраструктурные работы</strong>, обеспечивающие работу всего объекта.",
      capabilities: [
        { t: "Инженерия площадки", d: "Инженерные работы на объекте." },
        { t: "Поддержка конструкции", d: "Работы в поддержку основной конструкции." },
        { t: "Обустройство участка", d: "Инженерное обустройство территории." },
        { t: "Координация", d: "Координация с основной конструкцией." }
      ]
    },
    stats: [
      { ka: "ობიექტი მხარდაჭერილი", en: "Sites supported", ru: "Объектов поддержано", n: "10+" },
      { ka: "საინჟინრო სამუშაო", en: "Engineering scopes", ru: "Инженерных работ", n: "FULL" },
      { ka: "კოორდინაცია", en: "Coordination", ru: "Координация", n: "100%" },
      { ka: "ვადებში", en: "On schedule", ru: "В срок", n: "100%" }
    ]
  },
  {
    id: "estimates", num: "04", icon: "estimates",
    ka: {
      title: "ხარჯთაღრიცხვა და ტენდერი",
      tagline: "ყველა ეტაპი დათვლილი და ტენდერისთვის მზად.",
      shortDesc: "ხარჯთაღრიცხვა შრომისა და მანქანა-მექანიზმების მიხედვით, საბაზრო ფასებში, და ტენდერის სრული მომზადება.",
      overview: "ჩვენ ვხურავთ ციკლს ციფრებით — <strong>ხარჯთაღრიცხვა და ტენდერის მომზადება</strong> ისე, რომ ყველა ეტაპი იყოს დათვლილი და ბაზრის შესაბამისი.",
      capabilities: [
        { t: "ხარჯთაღრიცხვა", d: "დათვლა შრომისა და მანქანა-მექანიზმების მიხედვით." },
        { t: "საბაზრო ფასები", d: "ფასები ბაზრის შესაბამისად." },
        { t: "ტენდერის მომზადება", d: "სრული ტენდერის დოკუმენტაცია." },
        { t: "განაცხადის მხარდაჭერა", d: "სატენდერო განაცხადის მომზადება და მხარდაჭერა." }
      ]
    },
    en: {
      title: "Estimates & Tenders",
      tagline: "Every stage priced and tender-ready.",
      shortDesc: "Cost estimates by machine-mechanism and labour, priced to market, and full tender preparation.",
      overview: "We close the loop with the numbers — <strong>cost estimates and tender preparation</strong> so every stage is priced and market-aligned.",
      capabilities: [
        { t: "Cost estimates", d: "By labour and machine-mechanism." },
        { t: "Market pricing", d: "Priced to current market." },
        { t: "Tender preparation", d: "Full tender documentation." },
        { t: "Bid support", d: "Bid preparation and support." }
      ]
    },
    ru: {
      title: "Сметы и тендеры",
      tagline: "Каждый этап посчитан и готов к тендеру.",
      shortDesc: "Сметы по машино-механизмам и труду, по рыночным ценам, и полная подготовка тендера.",
      overview: "Замыкаем цикл цифрами — <strong>сметы и подготовка тендеров</strong>, чтобы каждый этап был посчитан и соответствовал рынку.",
      capabilities: [
        { t: "Сметы", d: "По труду и машино-механизмам." },
        { t: "Рыночные цены", d: "Цены по текущему рынку." },
        { t: "Подготовка тендеров", d: "Полная тендерная документация." },
        { t: "Поддержка заявок", d: "Подготовка и поддержка заявок." }
      ]
    },
    stats: [
      { ka: "ბაზრის ფასი", en: "Market-priced", ru: "По рынку", n: "100%" },
      { ka: "ტენდერი მზად", en: "Tender-ready", ru: "Готовность к тендеру", n: "FULL" },
      { ka: "გამჭვირვალე", en: "Transparent", ru: "Прозрачно", n: "100%" },
      { ka: "დათვლის სიზუსტე", en: "Estimate accuracy", ru: "Точность сметы", n: "HIGH" }
    ]
  },
  {
    id: "forms", num: "05", icon: "forms",
    ka: {
      title: "ფორმა #2 (IPC) და #3",
      tagline: "სერტიფიცირებული, აუდიტისთვის მზა დოკუმენტაცია.",
      shortDesc: "ფორმა #2-ის შედგენა დამტკიცებული ხარჯთაღრიცხვის მიხედვით, ობიექტის ვერიფიცირებული მონაცემებით.",
      overview: "ჩვენ ვაბარებთ სრულ სამშენებლო არქივს — <strong>ფორმა #2 (IPC) და #3, სერტიფიკატები და აქტები</strong> — ფიზიკური და ელექტრონული ფორმით, ინსპექციისა და აუდიტისთვის.",
      capabilities: [
        { t: "ფორმა #2 (IPC)", d: "შედგენა დამტკიცებული ხარჯთაღრიცხვით." },
        { t: "ფორმა #3", d: "ფორმა #3-ის შედგენა და გაფორმება." },
        { t: "სერტიფიკატები", d: "მასალისა და სამუშაოს სერტიფიკატები." },
        { t: "ფარული სამუშაოს აქტები", d: "ფარული და დეფექტური აქტები, ლაბ. დასკვნები." }
      ]
    },
    en: {
      title: "Form #2 (IPC) & #3",
      tagline: "Certified, audit-ready documentation.",
      shortDesc: "Compilation of Form #2 against the approved estimate, based on verified site information.",
      overview: "We hand over a complete construction archive — <strong>Form #2 (IPC) and #3, certificates and acts</strong> — in physical and electronic form, ready for inspection and audit.",
      capabilities: [
        { t: "Form #2 (IPC)", d: "Compiled against the approved estimate." },
        { t: "Form #3", d: "Form #3 compilation and execution." },
        { t: "Certificates", d: "Material and conformity certificates." },
        { t: "Hidden-works acts", d: "Hidden-works & defective acts, lab conclusions." }
      ]
    },
    ru: {
      title: "Форма №2 (IPC) и №3",
      tagline: "Сертифицированная документация, готовая к аудиту.",
      shortDesc: "Составление Формы №2 по утверждённой смете на основе проверенных данных объекта.",
      overview: "Сдаём полный строительный архив — <strong>Форма №2 (IPC) и №3, сертификаты и акты</strong> — в физическом и электронном виде, готовый к проверке и аудиту.",
      capabilities: [
        { t: "Форма №2 (IPC)", d: "Составляется по утверждённой смете." },
        { t: "Форма №3", d: "Составление и оформление Формы №3." },
        { t: "Сертификаты", d: "Сертификаты материалов и работ." },
        { t: "Акты скрытых работ", d: "Акты скрытых и дефектных работ, лаб. заключения." }
      ]
    },
    stats: [
      { ka: "სრული არქივი", en: "Complete archive", ru: "Полный архив", n: "100%" },
      { ka: "ფიზიკური + ციფრული", en: "Physical + digital", ru: "Физ. + цифра", n: "BOTH" },
      { ka: "აუდიტისთვის მზა", en: "Audit-ready", ru: "Готово к аудиту", n: "YES" },
      { ka: "ფოტო ანგარიში", en: "Photo reports", ru: "Фотоотчёты", n: "STAGE" }
    ]
  },
  {
    id: "geodesy", num: "06", icon: "geodesy",
    ka: {
      title: "გეოდეზია",
      tagline: "ზუსტი ნიშნულები, ვერიფიცირებული ობიექტზე.",
      shortDesc: "პროექტის ნიშნულების დადგენა და ვერიფიკაცია გეოდეზიური საზომი უწყისითა და ტოპოგრაფიით.",
      overview: "სიზუსტე ფუნდამენტიდან იწყება — <strong>პროექტის ნიშნულების დადგენა და ტოპოგრაფიული კონტროლი</strong> გეოდეზიური საზომი უწყისით.",
      capabilities: [
        { t: "ნიშნულების დადგენა", d: "პროექტის ნიშნულების ზუსტი დადგენა." },
        { t: "გეოდეზიური უწყისი", d: "ვერიფიკაცია საზომი უწყისით." },
        { t: "ტოპოგრაფია", d: "ტოპოგრაფიული აზომვა და კონტროლი." },
        { t: "კონტროლი მშენებლობაში", d: "გეომეტრიის კონტროლი მშენებლობისას." }
      ]
    },
    en: {
      title: "Geodesy",
      tagline: "Precise levels, verified on site.",
      shortDesc: "Setting project levels and verification by geodetic measured sheet and topography.",
      overview: "Precision starts at the foundation — <strong>setting project levels and topographic control</strong> verified by geodetic measured sheet.",
      capabilities: [
        { t: "Level-setting", d: "Precise setting of project levels." },
        { t: "Geodetic sheet", d: "Verification by measured sheet." },
        { t: "Topography", d: "Topographic survey and control." },
        { t: "Build control", d: "Geometry control during construction." }
      ]
    },
    ru: {
      title: "Геодезия",
      tagline: "Точные отметки, проверенные на объекте.",
      shortDesc: "Установка проектных отметок и проверка по геодезической исполнительной ведомости и топографии.",
      overview: "Точность начинается с фундамента — <strong>установка проектных отметок и топографический контроль</strong>, проверенные геодезической ведомостью.",
      capabilities: [
        { t: "Установка отметок", d: "Точная установка проектных отметок." },
        { t: "Геодезическая ведомость", d: "Проверка по исполнительной ведомости." },
        { t: "Топография", d: "Топографическая съёмка и контроль." },
        { t: "Контроль стройки", d: "Контроль геометрии при строительстве." }
      ]
    },
    stats: [
      { ka: "ნიშნულის სიზუსტე", en: "Level accuracy", ru: "Точность отметок", n: "±mm" },
      { ka: "ტოპო კონტროლი", en: "Topo control", ru: "Топоконтроль", n: "FULL" },
      { ka: "ვერიფიცირებული", en: "Verified", ru: "Проверено", n: "100%" },
      { ka: "უწყისი", en: "Measured sheets", ru: "Ведомости", n: "ALL" }
    ]
  }
];

/* ── PROJECTS (real GK Construction portfolio) ── */
const projects = [
  {
    id: "cityzen", serviceId: "structural", year: "2025", location: "თბილისი / Tbilisi",
    image: "images/projects/cityzen.webp",
    ka: { title: "CityZen", desc: "2 ბლოკი · რკ სტრუქტურული სამუშაოები", cat: "მშენებლობა" },
    en: { title: "CityZen", desc: "2 blocks · RC structural works", cat: "Construction" },
    ru: { title: "CityZen", desc: "2 блока · ЖБ конструктив", cat: "Строительство" }
  },
  {
    id: "mirtskhulava", serviceId: "structural", year: "2023", location: "თბილისი / Tbilisi",
    image: "images/projects/mirtskhulava.webp",
    ka: { title: "Mirtskhulava (m²)", desc: "2 ბლოკი · რკ სტრუქტურული სამუშაოები", cat: "მშენებლობა" },
    en: { title: "Mirtskhulava (m²)", desc: "2 blocks · RC structural works", cat: "Construction" },
    ru: { title: "Mirtskhulava (m²)", desc: "2 блока · ЖБ конструктив", cat: "Строительство" }
  },
  {
    id: "blox", serviceId: "structural", year: "2024", location: "თბილისი / Tbilisi",
    image: "images/projects/blox.webp",
    ka: { title: "Blox Sarajishvili", desc: "1 ბლოკი · რკ სტრუქტურული სამუშაოები", cat: "მშენებლობა" },
    en: { title: "Blox Sarajishvili", desc: "1 block · RC structural works", cat: "Construction" },
    ru: { title: "Blox Sarajishvili", desc: "1 блок · ЖБ конструктив", cat: "Строительство" }
  },
  {
    id: "buknari", serviceId: "structural", year: "2024", location: "ქობულეთი / Kobuleti",
    image: "images/projects/buknari.webp",
    ka: { title: "Buknari", desc: "1 ბლოკი · შავი ზღვის სანაპირო", cat: "მშენებლობა" },
    en: { title: "Buknari", desc: "1 block · Black Sea coast", cat: "Construction" },
    ru: { title: "Buknari", desc: "1 блок · побережье Чёрного моря", cat: "Строительство" }
  },
  {
    id: "akhmeteli", serviceId: "structural", year: "2023", location: "თბილისი / Tbilisi",
    image: "images/projects/archi-akhmeteli.jpg",
    ka: { title: "Archi Akhmeteli", desc: "რკინა-ბეტონის სამუშაოები", cat: "მშენებლობა" },
    en: { title: "Archi Akhmeteli", desc: "Reinforced-concrete works", cat: "Construction" },
    ru: { title: "Archi Akhmeteli", desc: "Железобетонные работы", cat: "Строительство" }
  }
];

/* ── EXPERIENCE / TRACK RECORD (per service) ── */
const experience = {
  structural: [
    { year: "2025", ka: { t: "CityZen", l: "თბილისი, უნივერსიტეტის ქ. #2", d: "2 ბლოკის რკ სტრუქტურული სამუშაოები." },
      en: { t: "CityZen", l: "Tbilisi, University St. #2", d: "RC structural works for 2 blocks." },
      ru: { t: "CityZen", l: "Тбилиси, ул. Университетская №2", d: "ЖБ конструктив для 2 блоков." } },
    { year: "2023", ka: { t: "Mirtskhulava (m²)", l: "თბილისი, ალ. მირცხულავას ქ.", d: "2 ბლოკის რკ სტრუქტურული სამუშაოები." },
      en: { t: "Mirtskhulava (m²)", l: "Tbilisi, Al. Mirtskhulava St.", d: "RC structural works for 2 blocks." },
      ru: { t: "Mirtskhulava (m²)", l: "Тбилиси, ул. Ал. Мирцхулава", d: "ЖБ конструктив для 2 блоков." } },
    { year: "2024", ka: { t: "Blox Sarajishvili", l: "თბილისი, სარაჯიშვილი", d: "1 ბლოკის რკ სტრუქტურული სამუშაოები." },
      en: { t: "Blox Sarajishvili", l: "Tbilisi, Sarajishvili", d: "RC structural works for 1 block." },
      ru: { t: "Blox Sarajishvili", l: "Тбилиси, Сараджишвили", d: "ЖБ конструктив для 1 блока." } },
    { year: "2024", ka: { t: "Buknari", l: "ქობულეთი, შავი ზღვის სანაპირო", d: "1 ბლოკის რკ სტრუქტურული სამუშაოები." },
      en: { t: "Buknari", l: "Kobuleti, Black Sea coast", d: "RC structural works for 1 block." },
      ru: { t: "Buknari", l: "Кобулети, побережье Чёрного моря", d: "ЖБ конструктив для 1 блока." } },
    { year: "2023", ka: { t: "Archi Akhmeteli", l: "თბილისი", d: "რკინა-ბეტონის სამშენებლო სამუშაოები." },
      en: { t: "Archi Akhmeteli", l: "Tbilisi", d: "Reinforced-concrete construction works." },
      ru: { t: "Archi Akhmeteli", l: "Тбилиси", d: "Железобетонные строительные работы." } },
    { year: "—", ka: { t: "Knauf Gips Tbilisi", l: "თბილისი", d: "კონსტრუქციის გაძლიერება და რეკონსტრუქცია." },
      en: { t: "Knauf Gips Tbilisi", l: "Tbilisi", d: "Structural strengthening & reconstruction." },
      ru: { t: "Knauf Gips Tbilisi", l: "Тбилиси", d: "Усиление и реконструкция конструкции." } }
  ],
  design: [
    { year: "—", ka: { t: "სრული პროექტირება", l: "ნებისმიერი კატეგორია", d: "სამუშაო ნახაზები ყველა პროექტისთვის, შესრულებამდე." },
      en: { t: "Full design scope", l: "Every category", d: "Working drawings for all projects, ahead of execution." },
      ru: { t: "Полное проектирование", l: "Любая категория", d: "Рабочие чертежи для всех проектов, до исполнения." } }
  ],
  infrastructure: [
    { year: "—", ka: { t: "ინდუსტრიული საწყობი", l: "საქართველო", d: "ლითონის კონსტრუქციის მოწყობა." },
      en: { t: "Industrial warehouse", l: "Georgia", d: "Metal-structure arrangement." },
      ru: { t: "Промышленный склад", l: "Грузия", d: "Монтаж металлоконструкций." } }
  ],
  estimates: [
    { year: "—", ka: { t: "ხარჯთაღრიცხვა და ტენდერი", l: "ყველა პროექტი", d: "საბაზრო ფასით დათვლა და ტენდერის მომზადება." },
      en: { t: "Estimates & tenders", l: "All projects", d: "Market-priced estimates and tender preparation." },
      ru: { t: "Сметы и тендеры", l: "Все проекты", d: "Сметы по рынку и подготовка тендеров." } }
  ],
  forms: [
    { year: "—", ka: { t: "სრული არქივი", l: "ყველა პროექტი", d: "ფორმა #2/#3, სერტიფიკატები, აქტები — ფიზიკური და ციფრული." },
      en: { t: "Complete archive", l: "All projects", d: "Form #2/#3, certificates, acts — physical and digital." },
      ru: { t: "Полный архив", l: "Все проекты", d: "Форма №2/№3, сертификаты, акты — физ. и цифра." } }
  ],
  geodesy: [
    { year: "—", ka: { t: "გეოდეზიური კონტროლი", l: "ყველა ობიექტი", d: "ნიშნულების დადგენა და ტოპოგრაფიული კონტროლი." },
      en: { t: "Geodetic control", l: "All sites", d: "Level-setting and topographic control." },
      ru: { t: "Геодезический контроль", l: "Все объекты", d: "Установка отметок и топоконтроль." } }
  ]
};

/* ── PROJECT GALLERIES (all photos per project) ── */
const galleries = {
  cityzen: ["images/projects/cityzen/1.webp","images/projects/cityzen/2.webp","images/projects/cityzen/3.webp","images/projects/cityzen/4.webp","images/projects/cityzen/5.webp","images/projects/cityzen/6.webp","images/projects/cityzen/7.webp","images/projects/cityzen/8.webp"],
  mirtskhulava: ["images/projects/mirtskhulava/1.webp","images/projects/mirtskhulava/2.webp","images/projects/mirtskhulava/3.webp","images/projects/mirtskhulava/4.webp","images/projects/mirtskhulava/5.jpeg"],
  blox: ["images/projects/blox/1.webp","images/projects/blox/2.webp"],
  buknari: ["images/projects/buknari/1.webp","images/projects/buknari/2.webp","images/projects/buknari/3.webp","images/projects/buknari/4.webp","images/projects/buknari/5.webp"],
  akhmeteli: ["images/projects/akhmeteli/1.jpg","images/projects/akhmeteli/2.jpg"]
};

/* Showcase band rotates through these hero shots */
const showcase = [
  "images/projects/cityzen/2.webp",
  "images/projects/buknari/2.webp",
  "images/projects/mirtskhulava/2.webp",
  "images/projects/cityzen/5.webp"
];

/* ── PARTNERS (developers GK works with) ── */
const partners = [
  { name: "ANAGI", logo: "images/partners/anagi.png" },
  { name: "m\u00b2", logo: "images/partners/m2.png" },
  { name: "ARCHI", logo: "images/partners/archi.png" },
  { name: "BLOX", logo: "images/partners/blox.png" },
  { name: "GTC", logo: "images/partners/gtc.png" },
  { name: "ELEMENT CONSTRUCTION", logo: "images/partners/element.png" },
  { name: "LISI DEVELOPMENT", logo: "images/partners/lisi.png" },
  { name: "BK CONSTRUCTION", logo: "images/partners/bk.png" }
];
