<!DOCTYPE HTML>
<!--
Arcana by HTML5 UP
html5up.net | @n33co
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
<head>
    <title>NOAO Data Lab - Survey Data</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <!--[if lte IE 8]>
    <script src="../assets/js/ie/html5shiv.js"></script><![endif]-->
    <link rel="stylesheet" href="../assets/css/main.css"/>
    <!--[if lte IE 8]>
    <link rel="stylesheet" href="../assets/css/ie8.css"/><![endif]-->
    <!--[if lte IE 9]>
    <link rel="stylesheet" href="../assets/css/ie9.css"/><![endif]-->


    <!--  Load elements of the template page.
    -->
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script>
        $(function () {
            $("#header").load("../inc/custom-header.inc");
            $("#sidebar").load("sidebar.html");
            $("#description").load("overview/description.html");
            $("#table_1").load("overview/table_1.html");
            $("#goals").load("overview/goals.html");
            $("#release").load("overview/data_release.html");
            $("#table_2").load("overview/table_2.html");
            $("#reduction").load("overview/data_reduction.html");
            $("#footer-content").load("../inc/custom-footer.inc");
        });
    </script>
</head>
<body id="survey">
<div id="page-wrapper">
    <div id="header"></div>

    <!-- Main -->
    <section class="wrapper style1">
        <div class="container">
            <div class="row 200%">
                <div class="3u 12u(narrower)">
                    <div id="sidebar">
                        <?php
                        include "sidebar.html";
                        ?>
                    </div>
                </div>
                <div class="9u  12u(narrower) important(narrower)">
                    <div id="content">

                        <!-- Content -->

                        <article>
                            <img src="../img/delve_banner.jpg" width="100%">

                            <div id="description">
                                <?php
                                include "overview/description.html";
                                ?>
                            </div>

                            <div id="table_1">
                            </div>
                            
                            <div id="goals">
                            </div>

                            <div id="release">
                                <?php
                                include "overview/data_release.html";
                                ?>
                            </div>

                            <div id="table_2">
                            </div>

                            <div id="reduction">
                            </div>

                            <a href="#0" class="back-to-top">Back to Top</a>
                            <br> <br>

                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div id="footer">
        <div class="container" id="footer-content">
            <?php
            include "../inc/custom-footer.inc";
            ?>
        </div>
    </div>

</div>
<!-- Scripts -->
<script src="../assets/js/jquery.min.js"></script>
<script src="../assets/js/jquery.dropotron.min.js"></script>
<script src="../assets/js/skel.min.js"></script>
<script src="../assets/js/util.js"></script>
<!--[if lte IE 8]>
<script src="../assets/js/ie/respond.min.js"></script><![endif]-->
<script src="../assets/js/main.js"></script>
<script>
    $('.back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
</script>

</body>
</html>
