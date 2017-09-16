/* DOM Elements */
    /* <head> */
        // Insertion > <link>
        document.head.append(createElement('link', '[href="https://fonts.googleapis.com/css?family=Roboto"][rel="stylesheet"]'));

/* Components */
    /* Dashboard */
        // Event
            // <body>
                // Key Down
                document.body.setEvent("keydown", function() {
                    /* Logic
                            If
                                the "Escape" key was pressed.
                    */
                    if ((event || []).code == "Escape")
                        // Dashboard Toggle Button > Click
                        !($$("$$dashboardToggleButton;") || "button".html)._toggle || ($$("$$dashboardToggleButton;") || "button".html).click()
                });

        /* Logic
                If
                    the Inner Width is greater than 768.
        */
            // On DOM Ready > Dashboard Toggle Button > Click
            onDOMReady(function() {
                !(innerWidth > 768) || ($$("$$dashboardToggleButton;") || "button".html).click();
            }, 1000);

    /* Header Navigation */
        // Event
            // <body>
                // Click
                document.body.setEvent("click", function() {
                    /* Loop
                            Index all the following elements.
                    */
                    for (var i = 0; i < $$('[data-id="pictureContainer"], [data-id="pictureContainerMenu"], [data-id="pictureContainerMenu"] *', 'length'); i++)
                        /* Logic
                                If
                                    any of them were clicked,

                                else if
                                    a 'click' was found outside the Header Navigation.
                        */
                        if (((event || []).target || []) == $$('[data-id="pictureContainer"], [data-id="pictureContainerMenu"], [data-id="pictureContainerMenu"] *', i)) {
                            ($$('#headerNavigation > #headerNavigationBody > #headerNavigationUserDetails > [data-id="pictureContainerMenu"]') || 'div'.html).style.opacity = 1;
                            ($$('#headerNavigation > #headerNavigationBody > #headerNavigationUserDetails > [data-id="pictureContainerMenu"]') || 'div'.html).style.pointerEvents = 'all';

                            // Break
                            break
                        }

                        else if ((event || []).clientY > ($$('#headerNavigation') || 'header'.html).height) {
                            ($$('#headerNavigation > #headerNavigationBody > #headerNavigationUserDetails > [data-id="pictureContainerMenu"]') || 'div'.html).delStyle('opacity');
                            ($$('#headerNavigation > #headerNavigationBody > #headerNavigationUserDetails > [data-id="pictureContainerMenu"]') || 'div'.html).delStyle('pointer-events')
                        }

                        else {
                            ($$('#headerNavigation > #headerNavigationBody > #headerNavigationUserDetails > [data-id="pictureContainerMenu"]') || 'div'.html).delStyle('opacity');
                            ($$('#headerNavigation > #headerNavigationBody > #headerNavigationUserDetails > [data-id="pictureContainerMenu"]') || 'div'.html).delStyle('pointer-events')
                        }
                });

        // Children
            // Body > Header Navigation User Details > Picture Container Menu
            ($$('#headerNavigation > #headerNavigationBody > #headerNavigationUserDetails > [data-id="pictureContainerMenu"]') || 'div'.html).style.top = (($$('#headerNavigation') || 'header'.html).height + 'px');

    /* Loading Screen
            --- CONSIDER ---
                Want a loading screen?
    */
        // Insertion
        // document.body.prepend(createElement("div", "#loadingScreen", "<div> </div>"));

        // Event > Window > Load
        /*
            setEvent("load", function() {
                // Delete > Loading Screen
                !$$("#loadingScreen") || $$("#loadingScreen").delete()
            });
        */