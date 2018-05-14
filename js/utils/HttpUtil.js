/**
 * @author Semper
 */
/*export function fetchNetData(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
                reject(error);
            }).then((responseData) => {
            if (!responseData) {
                reject(new Error('fetchNetData:responseData is null'));
                return;
            }
            resolve(responseData);
        }).done();
    })
}*/
export function fetchNetData() {
    return {
        zh:
        "我仰望星空，\n" +
        "它是那样寥廓而深邃；\n" +
        "那无穷的真理，\n" +
        "让我苦苦地求索、追随。\n" +
        "\n" +
        "我仰望星空，\n" +
        "它是那样庄严而圣洁；\n" +
        "那凛然的正义，\n" +
        "让我充满热爱、感到敬畏。\n" +
        "\n" +
        "我仰望星空，\n" +
        "它是那样自由而宁静；\n" +
        "那博大的胸怀，\n" +
        "让我的心灵栖息、依偎。\n" +
        "\n" +
        "我仰望星空，\n" +
        "它是那样壮丽而光辉；\n" +
        "那永恒的炽热，\n" +
        "让我心中燃起希望的烈焰、响起春雷。",

        en:
        "I look up at the starry sky\n" +
        "Which is so deep and vast.\n" +
        "The never-ending truth\n" +
        "Makes me struggle to follow and quest it.\n" +
        "\n" +
        "I look up at the starry sky\n" +
        "Which is so solemn, holy and pure.\n" +
        "The severe and awe-inspiring justice\n" +
        "Makes me filled with deep love and in awe of it.\n" +
        "\n" +
        "I look up at the starry sky\n" +
        "Which is so free and serene.\n" +
        "The broad bosom\n" +
        "Provides the place where where my soul rests and nestles to.\n" +
        " \n" +
        "I look up at the starry sky\n" +
        "Which is so marvelous and glorious.\n" +
        "The eternal blaze\n" +
        "Kindles the flame of hope in my heart, which resounds with spring thunder."
    }
}
