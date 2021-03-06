<?php
    require_once '../../header.php';
    require_once '../../dialogueBD/ListeObj.php';

    $diag = new ListeObj();

    $listeRetour = array();
    $listeItem = array();

    $listeListe = $diag->ListerListe();

    foreach ($listeListe as $element) 
    {
        $liste = $diag->ListerObjListe($element["idListFactory"]);

        foreach ($liste as $element1) 
        {
            array_push($listeItem, array(
                "idItem" => $element1["idItem"],
                "nomItem" => $element1["nomItem"],
                "qte" => $element1["qte"],
                "recetteUnite" => $diag->ListerRecetteItem($element1["idItem"])
            ));
        }

        array_push($listeRetour, array(

            "idListFactory" => $element["idListFactory"],
            "nomListFactory" => $element["nomListFactory"],

            "listeItem" => $listeItem
        ));

        $listeItem = array();
    }

    echo json_encode($listeRetour);
?>