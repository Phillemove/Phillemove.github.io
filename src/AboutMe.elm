module AboutMe exposing (aboutMeView)

import Html exposing (Html, br, div, h3, li, text, ul)


aboutMeView : Html msg
aboutMeView =
    div []
        [ h3 [] [ text "About Me" ]
        , div []
            [ text "My name is Philipp and i'm living in Harrislee near Flensburg in the north of Germany directly on the danish border."
            , br [] []
            , text "I work as a Network Administrator about 6 years. Then i decided to continue my education and start studying Applied computer science on Flensburg university of applied sciences."
            , br [] []
            , text "During the studies i learned a lot about software developing and get more and more interested in it. From all concepts of programming i like most functional programming."
            , br [] []
            , text "My Portfolio of Programming languages and Technologies are:"
            , ul []
                [ li [] [ text "Java" ]
                , li [] [ text "JavaScript" ]
                , li [] [ text "Go" ]
                , li [] [ text "Kotlin" ]
                , li [] [ text "Haskell" ]
                , li [] [ text "Elm" ]
                , li [] [ text "C#" ]
                , li [] [ text "Node.JS" ]
                , li [] [ text "HTML" ]
                , li [] [ text "Unity 3D" ]
                , li [] [ text "git" ]
                , li [] [ text "WPF" ]
                , li [] [ text "Java EE" ]
                , li [] [ text "SQL" ]
                , li [] [ text "MongoDB" ]
                ]
            ]
        ]
