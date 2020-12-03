/**
 * Created by huang on 1/22/18.
 */
(function ($) {
    $(".discovery_option").click(function () {
        $(".discovery_option").removeClass("active");
        $(this).addClass("active");
    });
    updateOutsideMenu();
    $(".gaia_discovery").click(function () {
        aladin.removeOverlayImageSurveys();
        aladin.setBaseImageLayer('GAIA2flux');
        aladin.setFrame('GAL');
        aladin.gotoObject('360 +5');
        version = 'gaia';

        if ($('#displayMayCat').length == 1) {
            $('#displayMayCat')[0].checked = 0;
        }
        if ($('#displaySmashCat').length == 1) {
            $('#displaySmashCat')[0].checked = 0;
        }
        $('.aladin-firstlayer')[0].value = 'None';
        $('.aladin-firstlayer-cmSelection')[0].value = 'native';
        $('.first-slider-control').hide();
        $('.aladin-secondlayer')[0].value = 'None';
        $('.aladin-thirdlayer')[0].value = 'None';
        $('.aladin-fourthlayer')[0].value = 'None';
        setFirstLayer();
        setFirstColor();
        aladin.view.catalogs = [];
        $('.aladin-measurement-div').empty();
        $('.aladin-measurement-div').hide();
        updateOutsideMenu();
    });
    $(".nsc_discovery").click(function () {
        aladin.removeOverlayImageSurveys();
        aladin.setBaseImageLayer('NOAO_Source_Catalog');
        aladin.setFrame('J2000');
        aladin.gotoObject('30 -30');
        aladin.getBaseImageLayer().getColorMap().update('rainbow');
        if ($('.aladin-cmSelection').length == 1) {
            $('.aladin-cmSelection')[0].options.selectedIndex = 4;
        }
        version = 'NSC';
        $('.aladin-firstlayer')[0].value = 'None';
        $('.aladin-firstlayer-cmSelection')[0].value = 'native';
        $('.first-slider-control').hide();
        $('.aladin-secondlayer')[0].value = 'None';
        $('.aladin-thirdlayer')[0].value = 'None';
        $('.aladin-fourthlayer')[0].value = 'None';
        setFirstLayer();
        setFirstColor();
        if ($('#displayMayCat').length == 1) {
            $('#displayMayCat')[0].checked = 0;
        }
        if ($('#displaySmashCat').length == 1) {
            $('#displaySmashCat')[0].checked = 0;
        }
        aladin.view.catalogs = [];
        $('.aladin-measurement-div').empty();
        $('.aladin-measurement-div').hide();
        updateOutsideMenu();
    });
    $(".image_discovery").click(function () {
        aladin.removeOverlayImageSurveys();
        aladin.setBaseImageLayer('NOAO/ExposureMap');
        aladin.setFrame('J2000');
        aladin.gotoObject('30 -30');
        aladin.getBaseImageLayer().getColorMap().update('rainbow');
        if ($('.aladin-cmSelection').length == 1) {
            $('.aladin-cmSelection')[0].options.selectedIndex = 4;
        }
        version = 'NOAO_exposure';
        $('.aladin-firstlayer')[0].value = 'None';
        $('.aladin-firstlayer-cmSelection')[0].value = 'native';
        $('.first-slider-control').hide();
        $('.aladin-secondlayer')[0].value = 'None';
        $('.aladin-thirdlayer')[0].value = 'None';
        $('.aladin-fourthlayer')[0].value = 'None';
        setFirstLayer();
        setFirstColor();

        if ($('#displayMayCat').length == 1) {
            $('#displayMayCat')[0].checked = 0;
        }
        if ($('#displaySmashCat').length == 1) {
            $('#displaySmashCat')[0].checked = 0;
        }

        aladin.view.catalogs = [];
        $('.aladin-measurement-div').empty();
        $('.aladin-measurement-div').hide();
        updateOutsideMenu();
    });
    $(".catalog_discovery").click(function () {
        aladin.removeOverlayImageSurveys();
        aladin.setBaseImageLayer('P/Mellinger/color');
        aladin.getBaseImageLayer().getColorMap().update('native');
        if ($('.aladin-cmSelection').length == 1) {
            $('.aladin-cmSelection')[0].options.selectedIndex = 0;
        }
        aladin.setFov(180);
        aladin.setFrame('J2000');
        aladin.gotoObject('LMC');

        if ($('#displayMayCat').length == 1) {
            $('#displayMayCat')[0].checked = 0;
        }
        if ($('#displaySmashCat').length == 1) {
            $('#displaySmashCat')[0].checked = 0;
        }
        $('.aladin-firstlayer')[0].value = 'SMASH';
        $('.aladin-secondlayer')[0].value = 'None';
        $('.aladin-thirdlayer')[0].value = 'None';
        $('.aladin-fourthlayer')[0].value = 'None';
        setFirstLayer();
        setFirstColor();
        if (aladin.getOverlayImageLayer('SMASH').getColorMap().reversed) {
            aladin.getOverlayImageLayer('SMASH').getColorMap().reverse();
        }
        version = 'smash';
        aladin.view.catalogs = [];
        $('.aladin-measurement-div').empty();
        $('.aladin-measurement-div').hide();
        updateOutsideMenu();
    });
    $(".des_discovery").click(function () {
        aladin.removeOverlayImageSurveys();
        aladin.setBaseImageLayer('DESDR1');
        aladin.getBaseImageLayer().getColorMap().update('native');
        if ($('.aladin-cmSelection').length == 1) {
            $('.aladin-cmSelection')[0].options.selectedIndex = 0;
        }
        aladin.setFov(180);
        aladin.setFrame('J2000');
        aladin.gotoObject('30 -30');

        $('.aladin-firstlayer')[0].value = 'P/Mellinger/color';
        $('.aladin-secondlayer')[0].value = 'None';
        $('.aladin-thirdlayer')[0].value = 'None';
        $('.aladin-fourthlayer')[0].value = 'None';
        setFirstLayer();
        setFirstColor();
        if (aladin.getOverlayImageLayer('P/Mellinger/color').getColorMap().reversed) {
            aladin.getOverlayImageLayer('P/Mellinger/color').getColorMap().reverse();
        }
        if ($('#displayMayCat').length == 1) {
            $('#displayMayCat')[0].checked = 0;
        }
        if ($('#displaySmashCat').length == 1) {
            $('#displaySmashCat')[0].checked = 0;
        }

        version = 'des';
        aladin.view.catalogs = [];
        $('.aladin-measurement-div').empty();
        $('.aladin-measurement-div').hide();
        updateOutsideMenu();
    });

    $('.first-slider-control').hide();
    $("#firstSlider").slider({
        value: 50,
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $("#firstOpacity").html(ui.value + "%");
            var valuePoints = ui.value / 100;
            var x = $('.aladin-firstlayer')[0].value;
            aladin.getOverlayImageLayer(x).setAlpha(valuePoints);
        }
    });

    $('.second-slider-control').hide();
    $("#secondSlider").slider({
        value: 50,
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $("#secondOpacity").html(ui.value + "%");
            var valuePoints = ui.value / 100;
            var x = $('.aladin-secondlayer')[0].value;
            aladin.getOverlayImageLayer(x).setAlpha(valuePoints);
        }
    });

    $('.third-slider-control').hide();
    $("#thirdSlider").slider({
        value: 50,
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $("#thirdOpacity").html(ui.value + "%");
            var valuePoints = ui.value / 100;
            var x = $('.aladin-thirdlayer')[0].value;
            aladin.getOverlayImageLayer(x).setAlpha(valuePoints);
        }
    });

    $('.fourth-slider-control').hide();
    $("#fourthSlider").slider({
        value: 50,
        min: 0,
        max: 100,
        slide: function (event, ui) {
            $("#fourthOpacity").html(ui.value + "%");
            var valuePoints = ui.value / 100;
            var x = $('.aladin-fourthlayer')[0].value;
            aladin.getOverlayImageLayer(x).setAlpha(valuePoints);
        }
    });

    $('#displayMayCat').change(function () {
        if ($('#displayMayCat').is(':checked')) {
            aladin.addCatalog(aladin.createProgressiveCatalog('https://datalab.noao.edu/HiPS/noao_image_center/jan2018_imgcen/', 'J2000', 5, {
                name: 'May16',
                sourceSize: 8,
                onClick: 'showPopup',
                color: 'red'
            }));
        }
        else {
            aladin.view.removeCatalog('May16');
        }
    });
    $('#displaySmashCat').change(function () {
        if ($('#displaySmashCat').is(':checked')) {
            aladin.addCatalog(aladin.createProgressiveCatalog('https://datalab.noao.edu/HiPS/smash/allsky_rc_hipscat/', 'equatorial', 11, {
                name: 'SmashCatalog',
                sourceSize: 8,
                onClick: 'showPopup',
                color: 'red'
            }));
        }
        else {
            aladin.view.removeCatalog('SmashCatalog');
        }
    });
    $('.outside-baselayer .aladin-surveySelection').change(function () {
        var selectBox = $('.outside-baselayer .aladin-surveySelection')[0];
        var selectedSurvey = selectBox.options[selectBox.selectedIndex].value;
        aladin.setBaseImageLayer(selectedSurvey);
        if (selectedSurvey == "NOAO_Source_Catalog" || selectedSurvey == "NOAO/ExposureMap") {
            aladin.getBaseImageLayer().getColorMap().update('rainbow');
        }
        aladin.setFrame('J2000');
        updateColor();
    });
    $('.outside-baselayer .aladin-cmap').change(function () {
        var selectCmap = $('.outside-baselayer .aladin-cmSelection')[0];
        var selectedColor = selectCmap.options[selectCmap.selectedIndex].value;
        aladin.getBaseImageLayer().getColorMap().update(selectedColor);
    });

    $('.outside-baselayer .aladin-reverseCm').click(function () {
        aladin.getBaseImageLayer().getColorMap().reverse();
    });

    $('.aladin-firstlayer-reverseCm').click(function () {
        var x = $('.aladin-firstlayer')[0].value;
        if (x != "None") {
            aladin.getOverlayImageLayer(x).getColorMap().reverse();
        }
    });

    $('.aladin-secondlayer-reverseCm').click(function () {
        var x = $('.aladin-secondlayer')[0].value;
        if (x != "None") {
            aladin.getOverlayImageLayer(x).getColorMap().reverse();
        }
    });

    $('.aladin-thirdlayer-reverseCm').click(function () {
        var x = $('.aladin-thirdlayer')[0].value;
        if (x != "None") {
            aladin.getOverlayImageLayer(x).getColorMap().reverse();
        }
    });

    $('.aladin-fourthlayer-reverseCm').click(function () {
        var x = $('.aladin-fourthlayer')[0].value;
        if (x != "None") {
            aladin.getOverlayImageLayer(x).getColorMap().reverse();
        }
    });

    function updateOutsideMenu() {
        updateSurvey();
        updateColor();
    }
    function updateSurvey() {
        $('.outside-baselayer .aladin-surveySelection').html('');
        var baseSurvey = aladin.getBaseImageLayer().id;
        var surveyList = HpxImageSurvey.getAvailableSurveys();
        for (var i = 0; i < surveyList.length; i++) {
            var isCurSurvey = surveyList[i].id == baseSurvey;
            $('.outside-baselayer .aladin-surveySelection').append($("<option />").attr("selected", isCurSurvey).val(surveyList[i].id).text(surveyList[i].name));

        }
    }
    function updateColor() {
        var color = aladin.getBaseImageLayer().getColorMap().map;
        var colorList = $('.outside-baselayer .aladin-cmSelection')[0];
        for (var j = 0; j < colorList.options.length; j++) {
            if (colorList.options[j].text == color) {
                colorList.selectedIndex = j;
            }
        }
        if (aladin.getBaseImageLayer().getColorMap().reversed) {
            aladin.getBaseImageLayer().getColorMap().reverse();
        }
    }

})(jQuery);

function resetLayers() {
    aladin.removeOverlayImageSurveys();
    var x = $('.aladin-firstlayer')[0].value;
    if (x != "None") {
        $('.first-slider-control').show();
        aladin.setOverlayImageLayer(HpxImageSurvey.getSurveyFromId(x));
        aladin.getOverlayImageLayer(x).setAlpha($('#firstSlider').slider("option","value")/100);
        var color = $('.aladin-firstlayer-cmSelection')[0].value;
        aladin.getOverlayImageLayer(x).getColorMap().update(color);
    }
    else {
        $('.first-slider-control').hide();
        $('.aladin-firstlayer-cmSelection')[0].value = "native";
        $("#firstOpacity").html("50%");
        $("#firstSlider").slider('value', 50);
    }
    var y = $('.aladin-secondlayer')[0].value;
    if (y != "None") {
        $('.second-slider-control').show();
        aladin.setOverlayImageLayer(HpxImageSurvey.getSurveyFromId(y));
        aladin.getOverlayImageLayer(y).setAlpha($('#secondSlider').slider("option","value")/100);
        var color = $('.aladin-secondlayer-cmSelection')[0].value;
        aladin.getOverlayImageLayer(y).getColorMap().update(color);
    }
    else {
        $('.second-slider-control').hide();
        $('.aladin-secondlayer-cmSelection')[0].value = "native";
        $("#secondOpacity").html("50%");
        $("#secondSlider").slider('value', 50);
    }
    var z = $('.aladin-thirdlayer')[0].value;
    if (z != "None") {
        $('.third-slider-control').show();
        aladin.setOverlayImageLayer(HpxImageSurvey.getSurveyFromId(z));
        aladin.getOverlayImageLayer(z).setAlpha($('#thirdSlider').slider("option","value")/100);
        var color = $('.aladin-thirdlayer-cmSelection')[0].value;
        aladin.getOverlayImageLayer(z).getColorMap().update(color);
    }
    else {
        $('.third-slider-control').hide();
        $('.aladin-thirdlayer-cmSelection')[0].value = "native";
        $("#thirdOpacity").html("50%");
        $("#thirdSlider").slider('value', 50);
    }
    var w = $('.aladin-fourthlayer')[0].value;
    if (w != "None") {
        $('.fourth-slider-control').show();
        aladin.setOverlayImageLayer(HpxImageSurvey.getSurveyFromId(w));
        aladin.getOverlayImageLayer(w).setAlpha($('#fourthSlider').slider("option","value")/100);
        var color = $('.aladin-fourthlayer-cmSelection')[0].value;
        aladin.getOverlayImageLayer(w).getColorMap().update(color);
    }
    else {
        $('.fourth-slider-control').hide();
        $('.aladin-fourthlayer-cmSelection')[0].value = "native";
        $("#fourthOpacity").html("50%");
        $("#fourthSlider").slider('value', 50);
    }
}
function setFirstLayer() {
    $('.aladin-firstlayer-cmSelection')[0].value = "native";
    $("#firstOpacity").html("50%");
    $("#firstSlider").slider('value', 50);
    resetLayers();

}
function setFirstColor() {
    var x = $('.aladin-firstlayer')[0].value;
    if (x != "None") {
        var y = $('.aladin-firstlayer-cmSelection')[0].value;
        aladin.getOverlayImageLayer(x).getColorMap().update(y);
    }
    else {
        $('.aladin-firstlayer-cmSelection')[0].value = "native";
    }
}

function setSecondLayer() {
    $('.aladin-secondlayer-cmSelection')[0].value = "native";
    $("#secondOpacity").html("50%");
    $("#secondSlider").slider('value', 50);
    resetLayers();
}
function setSecondColor() {
    var x = $('.aladin-secondlayer')[0].value;
    if (x != "None") {
        var y = $('.aladin-secondlayer-cmSelection')[0].value;
        aladin.getOverlayImageLayer(x).getColorMap().update(y);
    }
    else {
        $('.aladin-secondlayer-cmSelection')[0].value = "native";
    }
}

function setThirdLayer() {
    $('.aladin-thirdlayer-cmSelection')[0].value = "native";
    $("#thirdOpacity").html("50%");
    $("#thirdSlider").slider('value', 50);
    resetLayers();
}
function setThirdColor() {
    var x = $('.aladin-thirdlayer')[0].value;
    if (x != "None") {
        var y = $('.aladin-thirdlayer-cmSelection')[0].value;
        aladin.getOverlayImageLayer(x).getColorMap().update(y);
    }
    else {
        $('.aladin-thirdlayer-cmSelection')[0].value = "native";
    }
}

function setFourthLayer() {
    $('.aladin-fourthlayer-cmSelection')[0].value = "native";
    $("#fourthOpacity").html("50%");
    $("#fourthSlider").slider('value', 50);
    resetLayers();
}
function setFourthColor() {
    var x = $('.aladin-fourthlayer')[0].value;
    if (x != "None") {
        var y = $('.aladin-fourthlayer-cmSelection')[0].value;
        aladin.getOverlayImageLayer(x).getColorMap().update(y);
    }
    else {
        $('.aladin-fourthlayer-cmSelection')[0].value = "native";
    }
}