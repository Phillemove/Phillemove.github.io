module MyProjects exposing (myProjectsView)

import Html exposing (Html, a, br, div, h3, li, text, ul)
import Html.Attributes exposing (href)


myProjectsView : Html msg
myProjectsView =
    div []
        [ h3 [] [ text "My Projects" ]
        , text "During my studies and carrer i developed a few projects."
        , br [] []
        , text "The Projects the list below you can have a look to it."
        , ul []
            [ li [] [ a [ href "https://github.com/Phillemove/minesweeper" ] [ text "Minesweeper Game" ] ]
            , li [] [ a [ href "https://github.com/Phillemove/viergewinnt" ] [ text "Four in a Row Game" ] ]
            , li [] [ a [ href "https://github.com/Phillemove/twitterwall" ] [ text "Twitterwall Web Application" ] ]
            , li [] [ a [ href "https://github.com/Phillemove/Lernkartenapp" ] [ text "Learning Card Application" ] ]
            , li [] [ a [ href "https://github.com/Phillemove/planningtool" ] [ text "Calendar and Contact Management Application" ] ]
            ]
        , text "As Semester Project i was part of a developing Team for a java linter made with haskell programming language."
        , br [] []
        , text "For another Course a good friend an me programmed a small web application with elm programming language."
        , br [] []
        , text "As Bachelor Thesis project i designed and programmed an openapi-code generator for ktor server applications. This generator is completly written in kotlin code, which is my standard programming language to use."
        ]
