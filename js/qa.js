const qaList = [
    {
        id: "ngelism",
        title:"딥그린에 화이트 조명부분으로도 가능할까요?",
        date: 20230309,
        product_qa:true,
        deliver_qa:false,
        guitar_qa:false,
        secret:false
    },
    {
        id: "2045hytun",
        title:"조명상부는 재질이 유리인가요? 플라스틱인가요?",
        date: 20230307,
        product_qa:true,
        deliver_qa:false,
        guitar_qa:false,
        secret:false
    },
    {
        id: "chanchan",
        title:"배달은 언제쯤 가능한가요?",
        date: 20230307,
        product_qa:false,
        deliver_qa:true,
        guitar_qa:false,
        secret:false
    },
    {
        id: "flowerBloom",
        title: "상품의 품질 보증 기간은 어떻게 되나요?",
        date: 20230301,
        product_qa: true,
        deliver_qa: false,
        guitar_qa: false,
        secret: false
    },
    {
        id: "oceanWave",
        title: "배송이 늦어질 경우 어떻게 해야 하나요?",
        date: 20230302,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: false
    },
    {
        id: "starTwinkle",
        title: "기타 질문: 상품의 사이즈 정보가 정확한가요?",
        date: 20230303,
        product_qa: false,
        deliver_qa: false,
        guitar_qa: true,
        secret: false
    },
    {
        id: "sunrise",
        title: "비밀글입니다. 상품의 세부 사항에 대해 문의하고 싶습니다.",
        date: 20230304,
        product_qa: true,
        deliver_qa: false,
        guitar_qa: false,
        secret: true
    },
    {
        id: "nightSky",
        title: "배송지 변경은 어떻게 할 수 있나요?",
        date: 20230305,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: false
    },
    {
        id: "wildForest",
        title: "비밀글입니다. 배송에 대한 질문이 있습니다.",
        date: 20230335,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: true
    },
    {
        id: "silentLake",
        title: "기타 질문: 상품에 대한 후기를 어디서 볼 수 있나요?",
        date: 20230336,
        product_qa: false,
        deliver_qa: false,
        guitar_qa: true,
        secret: false
    },
    {
        id: "greenMeadow",
        title: "비밀글입니다. 상품 설명에 이해가 가지 않는 부분이 있습니다.",
        date: 20230337,
        product_qa: true,
        deliver_qa: false,
        guitar_qa: false,
        secret: true
    },
    {
        id: "blueOcean",
        title: "배송 진행 상황은 어떻게 확인할 수 있나요?",
        date: 20230338,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: false
    },
    {
        id: "desertMirage",
        title: "기타 질문: 상품의 사용 방법에 대한 동영상이 있나요?",
        date: 20230339,
        product_qa: false,
        deliver_qa: false,
        guitar_qa: true,
        secret: false
    },
    {
        id: "winterFrost",
        title: "상품이 방수 기능이 있나요?",
        date: 20230311,
        product_qa: true,
        deliver_qa: false,
        guitar_qa: false,
        secret: false
    },
    {
        id: "autumnLeaf",
        title: "배송 추적 번호는 어떻게 알 수 있나요?",
        date: 20230312,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: false
    },
    {
        id: "summerSunset",
        title: "기타 질문: 상품의 배터리 수명은 어떻게 되나요?",
        date: 20230313,
        product_qa: false,
        deliver_qa: false,
        guitar_qa: true,
        secret: false
    },
    {
        id: "springBreeze",
        title: "비밀글입니다. 상품 관련하여 문의드립니다.",
        date: 20230314,
        product_qa: true,
        deliver_qa: false,
        guitar_qa: false,
        secret: true
    },
    {
        id: "cosmicStar",
        title: "포장 상태는 어떻게 되나요?",
        date: 20230315,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: false
    },
    {
        id: "forestStream",
        title: "기타 질문: 상품의 부품 교체는 가능한가요?",
        date: 20230316,
        product_qa: false,
        deliver_qa: false,
        guitar_qa: true,
        secret: false
    },
    {
        id: "mountainPeak",
        title: "제품의 소재는 무엇인가요?",
        date: 20230335,
        product_qa: true,
        deliver_qa: false,
        guitar_qa: false,
        secret: false
    },
    {
        id: "skyBlue",
        title: "배송 시 배송비는 어떻게 청구되나요?",
        date: 20230336,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: false
    },
    {
        id: "sunnyYellow",
        title: "기타 질문: 이 제품에 대한 리뷰는 어디에서 볼 수 있나요?",
        date: 20230337,
        product_qa: false,
        deliver_qa: false,
        guitar_qa: true,
        secret: false
    },
    {
        id: "sunsetRed",
        title: "비밀글입니다. 배송에 대한 문의드립니다.",
        date: 20230338,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: true
    },
    {
        id: "moonlightSilver",
        title: "제품이 환불 가능한가요?",
        date: 20230339,
        product_qa: true,
        deliver_qa: false,
        guitar_qa: false,
        secret: false
    },
    {
        id: "starlightPlatinum",
        title: "기타 질문: 이 제품의 설치는 어떻게 하나요?",
        date: 20230340,
        product_qa: false,
        deliver_qa: false,
        guitar_qa: true,
        secret: false
    },
    {
        id: "rainbow",
        title: "비밀글입니다. 제품에 대한 상세 문의드립니다.",
        date: 20230341,
        product_qa: true,
        deliver_qa: false,
        guitar_qa: false,
        secret: true
    },
    {
        id: "whiteSnow",
        title: "제품 배송은 어느 지역까지 가능한가요?",
        date: 20230342,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: false
    },
    {
        id: "blackNight",
        title: "기타 질문: 이 제품의 보증기간은 어떻게 되나요?",
        date: 20230343,
        product_qa: false,
        deliver_qa: false,
        guitar_qa: true,
        secret: false
    },
    {
        id: "silverMoon",
        title: "비밀글입니다. 배송 관련하여 문의드립니다.",
        date: 20230344,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: true
    },
    {
        id: "goldenSun",
        title: "제품은 어떤 색상이 있나요?",
        date: 20230345,
        product_qa: true,
        deliver_qa: false,
        guitar_qa: false,
        secret: false
    },
    {
        id: "copperLeaf",
        title: "기타 질문: 이 제품은 어떤 재질로 만들어졌나요?",
        date: 20230346,
        product_qa: false,
        deliver_qa: false,
        guitar_qa: true,
        secret: false
    },
    {
        id: "bronzeStatue",
        title: "비밀글입니다. 제품에 대해 문의드립니다.",
        date: 20230347,
        product_qa: true,
        deliver_qa: false,
        guitar_qa: false,
        secret: true
    },
    {
        id: "steelBridge",
        title: "배송 일정은 어떻게 되나요?",
        date: 20230348,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: false
    },
    {
        id: "aluminumFoil",
        title: "기타 질문: 이 제품의 충전 시간은 어떻게 되나요?",
        date: 20230349,
        product_qa: false,
        deliver_qa: false,
        guitar_qa: true,
        secret: false
    },
    {
        id: "titaniumFrame",
        title: "비밀글입니다. 배송에 대해 문의드립니다.",
        date: 20230350,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: true
    },
    {
        id: "titaniumFrame",
        title: "비밀글입니다. 배송에 대해 문의드립니다.",
        date: 20230350,
        product_qa: false,
        deliver_qa: true,
        guitar_qa: false,
        secret: true
    },
    {
        id: "aluminumFoil",
        title: "기타 질문: 이 제품의 충전 시간은 어떻게 되나요?",
        date: 20230349,
        product_qa: false,
        deliver_qa: false,
        guitar_qa: true,
        secret: false
    },
];

export default qaList