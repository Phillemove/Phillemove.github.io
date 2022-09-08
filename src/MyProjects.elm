module MyProjects exposing (myProjectsView)

import Html exposing (Html, div, h3, text)


myProjectsView : Html msg
myProjectsView =
    div []
        [ h3 [] [ text "My Projects" ]
        , text "This site is under construction. In a few Days you will see more about me here"
        ]
