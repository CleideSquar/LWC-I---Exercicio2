// Importa a classe LightningElement do módulo lwc
import { LightningElement } from 'lwc';

// Define as constantes para as imagens e títulos ocultos e exibidos
const HIDDEN_IMAGE = 'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg';
const HIDDEN_TITLE = 'Quem é esse pokemon?';
const SHOWN_IMAGE = 'https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg';
const SHOWN_TITLE = 'É o Flareon...';

// Exporta a classe PokemonImage que estende a classe LightningElement
export default class PokemonImage extends LightningElement {
    
    // Inicializa as propriedades para a imagem e título ocultos
    currentImage = HIDDEN_IMAGE;
    currentTitle = HIDDEN_TITLE;
    
    // Define a função para trocar entre as imagens e títulos ocultos e exibidos
    changeImage() {
        this.currentImage = this.currentImage === HIDDEN_IMAGE ? SHOWN_IMAGE : HIDDEN_IMAGE;
        this.currentTitle = this.currentTitle === HIDDEN_TITLE ? SHOWN_TITLE : HIDDEN_TITLE;
    }
}
