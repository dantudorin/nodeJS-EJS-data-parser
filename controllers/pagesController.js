exports.getAbout = (req, res, next) => {
    res.render('pages/about');
};

exports.getIndex = (req, res, next) => {

    let drinks = [
        {name : 'Bloody Mary', drunkness : 3},
        {name : 'Martini', drunkness : 5},
        {name : 'Scotch', drunkness : 10}
    ];

    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks : [],
        tagline : tagline
    });
}