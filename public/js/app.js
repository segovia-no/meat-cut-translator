document.addEventListener('DOMContentLoaded', () => {
  const meatData = {
    br: {
      name: " 🇧🇷 Brasil",
      cuts: {
        'Picanha': { cl: 'Punta de Ganso', ar: 'Tapa de Cuadril', us: 'Sirloin Cap / Rump Cap' },
        'Filé Mignon': { cl: 'Filete', ar: 'Lomo', us: 'Tenderloin' },
        'Contrafilé': { cl: 'Lomo Vetado', ar: 'Bife de Chorizo', us: 'Strip Loin / NY Strip' },
        'Fraldinha': { cl: 'Entraña', ar: 'Vacío', us: 'Flank Steak' },
        'Maminha': { cl: 'Punta de Picana', ar: 'Colita de Cuadril', us: 'Bottom Sirloin / Tri-tip' },
        'Alcatra': { cl: 'Lomo Liso', ar: 'Cuadril', us: 'Top Sirloin' },
        'Coxão Mole': { cl: 'Posta Rosada', ar: 'Bola de Lomo', us: 'Bottom Round' },
        'Coxão Duro': { cl: 'Posta Negra', ar: 'Cuadrada', us: 'Top Round' },
        'Lagarto': { cl: 'Posta Negra', ar: 'Peceto', us: 'Eye of Round' },
        'Patinho': { cl: 'Posta Rosada', ar: 'Cuadrada', us: 'Knuckle / Sirloin Tip' },
        'Músculo': { cl: 'Osobuco', ar: 'Osobuco', us: 'Shin / Shank' },
        'Acém': { cl: 'Tapapecho', ar: 'Aguja', us: 'Chuck' },
        'Paleta': { cl: 'Paleta', ar: 'Paleta', us: 'Shoulder Clod' },
        'Costela': { cl: 'Costillar', ar: 'Costilla / Asado', us: 'Short Ribs' },
        'Cupim': { cl: 'Sobrecostilla', ar: 'Cupim', us: 'Hump (Zebu)' },
        'Peito': { cl: 'Pecho', ar: 'Pecho', us: 'Brisket' },
        'Aba de Filé': { cl: 'Entraña Fina', ar: 'Entraña Fina', us: 'Skirt Steak' },
        'Ancho': { cl: 'Lomo Vetado', ar: 'Bife Ancho', us: 'Ribeye' },
        'Bisteca': { cl: 'Chuleta', ar: 'T-Bone', us: 'T-Bone Steak' },
        'Baby Beef': { cl: 'Filete Tornedó', ar: 'Ojo de Bife', us: 'Baby Beef / Veal' },
      }
    },
    cl: {
      name: " 🇨🇱 Chile",
      cuts: {
        'Punta de Ganso': { br: 'Picanha', ar: 'Tapa de Cuadril', us: 'Sirloin Cap / Rump Cap' },
        'Filete': { br: 'Filé Mignon', ar: 'Lomo', us: 'Tenderloin' },
        'Lomo Vetado': { br: 'Contrafilé / Ancho', ar: 'Bife de Chorizo / Bife Ancho', us: 'Ribeye / Strip Loin' },
        'Lomo Liso': { br: 'Alcatra', ar: 'Cuadril', us: 'Top Sirloin' },
        'Entraña': { br: 'Fraldinha', ar: 'Vacío', us: 'Flank Steak' },
        'Entraña Fina': { br: 'Aba de Filé', ar: 'Entraña Fina', us: 'Skirt Steak' },
        'Punta de Picana': { br: 'Maminha', ar: 'Colita de Cuadril', us: 'Bottom Sirloin / Tri-tip' },
        'Posta Rosada': { br: 'Coxão Mole', ar: 'Bola de Lomo', us: 'Bottom Round' },
        'Posta Negra': { br: 'Lagarto / Coxão Duro', ar: 'Peceto / Cuadrada', us: 'Eye of Round / Top Round' },
        'Posta Paleta': { br: 'Paleta', ar: 'Paleta', us: 'Shoulder Clod' },
        'Asado de Tira': { br: 'Costela', ar: 'Asado de Tira', us: 'Short Ribs' },
        'Osobuco': { br: 'Músculo', ar: 'Osobuco', us: 'Shin / Shank' },
        'Tapapecho': { br: 'Acém', ar: 'Aguja', us: 'Chuck' },
        'Costillar': { br: 'Costela', ar: 'Costilla', us: 'Ribs' },
        'Pecho': { br: 'Peito', ar: 'Pecho', us: 'Brisket' },
        'Plateada': { br: 'Peito', ar: 'Falda', us: 'Plate' },
        'Chuleta': { br: 'Bisteca', ar: 'T-Bone', us: 'T-Bone Steak' },
        'Huachalomo': { br: 'Acém', ar: 'Chingolo', us: 'Chuck Eye Roll' },
        'Sobrecostilla': { br: 'Cupim', ar: 'Tapa de Asado', us: 'Rib Cap' },
        'Malaya': { br: 'Fraldinha', ar: 'Matambre', us: 'Rose Meat' },
      }
    },
    ar: {
      name: " 🇦🇷 Argentina",
      cuts: {
        'Tapa de Cuadril': { br: 'Picanha', cl: 'Punta de Ganso', us: 'Sirloin Cap / Rump Cap' },
        'Lomo': { br: 'Filé Mignon', cl: 'Filete', us: 'Tenderloin' },
        'Bife de Chorizo': { br: 'Contrafilé', cl: 'Lomo Vetado', us: 'Strip Loin / NY Strip' },
        'Bife Ancho': { br: 'Ancho', cl: 'Lomo Vetado', us: 'Ribeye' },
        'Ojo de Bife': { br: 'Ancho', cl: 'Lomo Vetado', us: 'Ribeye Steak' },
        'Vacío': { br: 'Fraldinha', cl: 'Entraña', us: 'Flank Steak' },
        'Entraña': { br: 'Fraldinha', cl: 'Entraña', us: 'Skirt Steak (outside)' },
        'Entraña Fina': { br: 'Aba de Filé', cl: 'Entraña Fina', us: 'Skirt Steak (inside)' },
        'Colita de Cuadril': { br: 'Maminha', cl: 'Punta de Picana', us: 'Bottom Sirloin / Tri-tip' },
        'Cuadril': { br: 'Alcatra', cl: 'Lomo Liso', us: 'Top Sirloin' },
        'Bola de Lomo': { br: 'Coxão Mole', cl: 'Posta Rosada', us: 'Bottom Round' },
        'Cuadrada': { br: 'Coxão Duro / Patinho', cl: 'Posta Negra', us: 'Top Round / Knuckle' },
        'Peceto': { br: 'Lagarto', cl: 'Posta Negra', us: 'Eye of Round' },
        'Nalga': { br: 'Coxão Mole', cl: 'Posta Rosada', us: 'Bottom Round' },
        'Asado de Tira': { br: 'Costela', cl: 'Asado de Tira', us: 'Short Ribs' },
        'Costilla': { br: 'Costela', cl: 'Costillar', us: 'Ribs' },
        'Osobuco': { br: 'Músculo', cl: 'Osobuco', us: 'Shin / Shank' },
        'Aguja': { br: 'Acém', cl: 'Tapapecho', us: 'Chuck' },
        'Paleta': { br: 'Paleta', cl: 'Posta Paleta', us: 'Shoulder Clod' },
        'Pecho': { br: 'Peito', cl: 'Pecho', us: 'Brisket' },
        'Falda': { br: 'Peito', cl: 'Plateada', us: 'Plate' },
        'Matambre': { br: 'Fraldinha', cl: 'Malaya', us: 'Rose Meat / Flank' },
        'Marucha': { br: 'Acém', cl: 'Tapapecho', us: 'Chuck Tender' },
        'T-Bone': { br: 'Bisteca', cl: 'Chuleta', us: 'T-Bone Steak' },
        'Tapa de Asado': { br: 'Cupim', cl: 'Sobrecostilla', us: 'Rib Cap / Spinalis' },
      }
    },
    us: {
      name: "🇺🇸 USA",
      cuts: {
        'Tenderloin': { br: 'Filé Mignon', cl: 'Filete', ar: 'Lomo' },
        'Sirloin Cap / Rump Cap': { br: 'Picanha', cl: 'Punta de Ganso', ar: 'Tapa de Cuadril' },
        'Strip Loin / NY Strip': { br: 'Contrafilé', cl: 'Lomo Vetado', ar: 'Bife de Chorizo' },
        'Ribeye': { br: 'Ancho', cl: 'Lomo Vetado', ar: 'Bife Ancho / Ojo de Bife' },
        'Ribeye Steak': { br: 'Ancho', cl: 'Lomo Vetado', ar: 'Ojo de Bife' },
        'Top Sirloin': { br: 'Alcatra', cl: 'Lomo Liso', ar: 'Cuadril' },
        'Bottom Sirloin / Tri-tip': { br: 'Maminha', cl: 'Punta de Picana', ar: 'Colita de Cuadril' },
        'Flank Steak': { br: 'Fraldinha', cl: 'Entraña', ar: 'Vacío' },
        'Skirt Steak': { br: 'Aba de Filé', cl: 'Entraña Fina', ar: 'Entraña / Entraña Fina' },
        'Bottom Round': { br: 'Coxão Mole', cl: 'Posta Rosada', ar: 'Bola de Lomo / Nalga' },
        'Top Round': { br: 'Coxão Duro', cl: 'Posta Negra', ar: 'Cuadrada' },
        'Eye of Round': { br: 'Lagarto', cl: 'Posta Negra', ar: 'Peceto' },
        'Knuckle / Sirloin Tip': { br: 'Patinho', cl: 'Posta Rosada', ar: 'Cuadrada' },
        'Short Ribs': { br: 'Costela', cl: 'Asado de Tira', ar: 'Asado de Tira' },
        'Ribs': { br: 'Costela', cl: 'Costillar', ar: 'Costilla' },
        'Shin / Shank': { br: 'Músculo', cl: 'Osobuco', ar: 'Osobuco' },
        'Chuck': { br: 'Acém', cl: 'Tapapecho', ar: 'Aguja' },
        'Chuck Eye Roll': { br: 'Acém', cl: 'Huachalomo', ar: 'Chingolo' },
        'Shoulder Clod': { br: 'Paleta', cl: 'Posta Paleta', ar: 'Paleta' },
        'Brisket': { br: 'Peito', cl: 'Pecho', ar: 'Pecho' },
        'Plate': { br: 'Peito', cl: 'Plateada', ar: 'Falda' },
        'T-Bone Steak': { br: 'Bisteca', cl: 'Chuleta', ar: 'T-Bone' },
        'Porterhouse': { br: 'Bisteca', cl: 'Chuleta', ar: 'T-Bone' },
        'Rib Cap / Spinalis': { br: 'Cupim', cl: 'Sobrecostilla', ar: 'Tapa de Asado' },
        'Rose Meat': { br: 'Fraldinha', cl: 'Malaya', ar: 'Matambre' },
        'Hump (Zebu)': { br: 'Cupim', cl: 'Sobrecostilla', ar: 'Cupim' },
      }
    }
  };

  const baseCountrySelect = document.getElementById('base-country');
  const meatCutSelect = document.getElementById('meat-cut');
  const resultsDiv = document.getElementById('results');

  function populateMeatCuts() {
    const selectedCountry = baseCountrySelect.value;
    meatCutSelect.innerHTML = '';
    const cuts = meatData[selectedCountry].cuts;
    for (const cut in cuts) {
      const option = document.createElement('option');
      option.value = cut;
      option.textContent = cut;
      meatCutSelect.appendChild(option);
    }
    displayResults();
  }

  function displayResults() {
    const selectedCountry = baseCountrySelect.value;
    const selectedCut = meatCutSelect.value;
    resultsDiv.innerHTML = '';

    if (!selectedCut) return;

    const equivalents = meatData[selectedCountry].cuts[selectedCut];

    for (const countryCode in equivalents) {
      const countryName = meatData[countryCode].name;
      const equivalentCut = equivalents[countryCode];

      const resultItem = document.createElement('div');
      resultItem.classList.add('result-item');
      resultItem.innerHTML = `
<h3>${countryName}: </h3>
<p>${equivalentCut}</p>
`;
      resultsDiv.appendChild(resultItem);
    }
  }

  baseCountrySelect.addEventListener('change', populateMeatCuts);
  meatCutSelect.addEventListener('change', displayResults);

  // WhatsApp share functionality
  const whatsappBtn = document.getElementById('share-whatsapp');
  
  // Country names without emojis
  const countryNamesClean = {
    br: 'Brasil',
    cl: 'Chile',
    ar: 'Argentina',
    us: 'USA'
  };

  whatsappBtn.addEventListener('click', () => {
    const selectedCountry = baseCountrySelect.value;
    const selectedCut = meatCutSelect.value;

    if (!selectedCut) {
      alert('Por favor selecciona un corte de carne primero');
      return;
    }

    const equivalents = meatData[selectedCountry].cuts[selectedCut];
    
    // Build message without emojis
    let message = `*Traductor de Cortes de Carne*\n\n`;
    message += `*País de origen:* ${countryNamesClean[selectedCountry]}\n`;
    message += `*Corte:* ${selectedCut}\n\n`;
    message += `*Equivalencias:*\n`;
    
    for (const countryCode in equivalents) {
      const countryName = countryNamesClean[countryCode];
      const equivalentCut = equivalents[countryCode];
      message += `• ${countryName}: ${equivalentCut}\n`;
    }
    
    message += `\nhttps://traductordecortes.vercel.app`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  });

  // Initial population
  populateMeatCuts();
});
