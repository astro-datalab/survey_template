<div class="row">
<section class="image-links 4u 6u(narrower) 12u$(mobilep)">
    <p>
        <a href="http://www.noao.edu/"><img src="http://www.noao.edu/meetings/m../img/noao-logo.png" alt="NOAO" width="60"></a>

        <a href="http://www.aura-astronomy.org/"><img src="http://www.noao.edu/meetings/m../img/aura-logo.png" alt="AURA"></a>

        <a href="http://www.nsf.gov/"><img src="http://www.noao.edu/meetings/m../img/nsf-logo.png" alt="NSF"></a>
    </p>
    <p>
        <a href="https://github.com/noao-datalab"><img src="../img/GitHub-Mark.png" alt="github" width="55"></a>
        <a href="https://twitter.com/noaodatalab"><img src="../img/Twitter_Logo_Blue.png" alt="twitter" width="80"></a>
    </p>
</section>

<section class="8u 6u$(narrower) 12u$(mobilep)">
    <p>The NOAO Data Lab is being developed by the <a href="http://www.noao.edu/">National Optical Astronomy Observatory</a>, the national center for ground-based nighttime astronomy in the United States operated by the <a href="http://www.aura-astronomy.org/">Association of Universities for Research in Astronomy</a> (AURA) under cooperative agreement with the <a href="http://www.nsf.gov/">National Science Foundation</a>.</p>

    <p>For further information, contact <a href="&#x6D;&#97;&#x69;&#x6C;&#x74;&#x6F;:&#100;&#97;&#x74;&#x61;l&#97;&#98;&#64;&#x6E;&#x6F;a&#x6F;.&#101;&#100;u">&#100;&#97;&#x74;&#x61;l&#97;&#98;&#64;&#x6E;&#x6F;a&#x6F;.&#101;&#100;u</a>.</p>
</section>

</div>
<!-- Copyright -->
<div class="copyright">
    <ul class="menu">
        <li>Design: Wendy Huang, Mark Newhouse &amp; <a href="http://html5up.net">HTML5 UP</a></li>
    </ul>
</div>
<script>
    $(function() {
        var $sidebar   = $("#sidebar"),
            $window    = $(window),
            offset     = $sidebar.offset(),
            topPadding = 15;

        $window.scroll(function() {
            if ($window.scrollTop() > offset.top) {
                $sidebar.stop().animate({
                    marginTop: $window.scrollTop() - offset.top + topPadding
                });
            } else {
                $sidebar.stop().animate({
                    marginTop: 0
                });
            }
        });

    });
</script>