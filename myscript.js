//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)
//credit also goes to Lauren Orsini of Caaaarbs (https://github.com/laurenorsini/caaaaarbs)
//The source code for this plugin lives at https://github.com/LeTarrask/Odebretchr

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bGerson Machado\b/g, "Marco Ruffo");
	v = v.replace(/\bAlberto Youssef\b/g, "Roberto Ibrahim");
	v = v.replace(/\Yousef\b/g, "Ibrahim");
	v = v.replace(/\bErika Marena\b/g, "Verena Cardoni");
	v = v.replace(/\bErika Mialik Marena\b/g, "Verena Cardoni");
	v = v.replace(/\bPaulo Roberto da Costa\b/g, "João Pedro Rangel");
	v = v.replace(/\bPaulo Roberto Costa\b/g, "João Pedro Rangel");
	v = v.replace(/\bPaulo Roberto\b/g, "João Pedro");
	v = v.replace(/\bDilma Roussef\b/g, "Janete Ruscov");
	v = v.replace(/\Roussef\b/g, "Ruscov");
	v = v.replace(/\bDilma\b/g, "Janete");	
	v = v.replace(/\bLuíz Inácio Lula da Silva\b/g, "João Higino");
	v = v.replace(/\bLula\b/g, "Higino");
	v = v.replace(/\bSérgio Moro\b/g, "Paulo Rigo");
	v = v.replace(/\Moro\b/g, "Rigo");	
	v = v.replace(/\bAécio Neves\b/g, "Lúcio Lemes");
	v = v.replace(/\bAécio\b/g, "Lúcio");
	v = v.replace(/\Kodama\b/g, "Kitano");
	v = v.replace(/\bNelma\b/g, "Wilma");
	v = v.replace(/\Marcelo Odebrecht\b/g, "Ricardo Brecht");
	v = v.replace(/\bJaponês da Federal\b/g, "China");
	v = v.replace(/\bMichel Temer\b/g, "Samuel Thames");
	v = v.replace(/\Temer\b/g, "Thames");
	v = v.replace(/\bMárcio Thomaz Bastos\b/g, "Mário Garcez Brito");	
	v = v.replace(/\bCarlos Habib Chater\b/g, "Chebab");
	v = v.replace(/\bMarici\b/g, "Samira");
	v = v.replace(/\bMarici Costa\b/g, "Samira Rangel");
	v = v.replace(/\bArianna\b/g, "Shayenne");	
	v = v.replace(/\bDeltan\b/g, "Dimas");
	v = v.replace(/\bDallagnol\b/g, "Donatelli");
	v = v.replace(/\bLéo Pinheiro\b/g, "Tom Carvalho");
	v = v.replace(/\bDalton Avancini\b/g, "Décio Correia");
	v = v.replace(/\bPolícia Federal\b/g, "Polícia Federativa");
	v = v.replace(/\bPT\b/g, "PO");
	v = v.replace(/\bPetrobras\b/g, "Petrobrasil");
	v = v.replace(/\bPetrobrás\b/g, "Petrobrasil");
	v = v.replace(/\bEmpreiteira OAS\b/g, "Grupo OSA");	
	v = v.replace(/\bOAS\b/g, "OSA");	
	v = v.replace(/\bOdebrecht\b/g, "Miller & Bretch");
	v = v.replace(/\bGalvão Engenharia\b/g, "Bueno Engenharia");
	v = v.replace(/\bBR Distribuidora\b/g, "TR Distribuidora");
	v = v.replace(/\bBanco do Brasil\b/g, "Banco Brasileiro");
	v = v.replace(/\bInterpol\b/g, "Interpolice");
	v = v.replace(/\bProcuradoria Geral da República\b/g, "Procuradoria Geral Republicana");
	v = v.replace(/\bVeja\b/g, "Leia");
	v = v.replace(/\bBanestado\b/g, "Banco do Estado");	
	v = v.replace(/\bAbreu e Lima\b/g, "Antônio e Lima");	

	textNode.nodeValue = v;
}


