/*
Mockup
*/
console.log(`
    Xpress finance

    Menu:
    - Register
        - User, Password
    - Log in
        - User, Password
            - (Menu)
            - Inversion
                - Nu, Mercado Pago, Cetes
            - Afore
                - Siafore Basica
                - Siafore 90's
            - Taxes
                - Enter Salary
                    *Receive your taxes
    `);

console.log(`
project/
|-- index.html                          # Página principal
|
|-- assets/
|   |-- images/                         # Imágenes del proyecto
|   |
|   |-- styles/                         
|   |   |-- main.css                    # Estilos generales
|   |   |-- register.css                # Estilos específicos para el registro
|   |   |-- login.css                   # Estilos específicos para el login
|   |   |-- modulus/
|   |   |   |-- _mixin.scss             # Mixins globales de SASS
|   |   |   |-- _vars.scss              # Variables globales de SASS
|   |
|   |-- scripts/
|       |-- main.js                     # Archivo JS principal
|       |-- register.js                 # Lógica JS para el registro
|       |-- login.js                    # Lógica JS para el login
|       |-- menu.js                     # Lógica JS para el menú
|       |-- inversion.js                # Lógica JS para la sección de inversión
|       |-- taxes.js                    # Lógica JS para la sección de impuestos
|
|-- components/                         
|   |-- header/                         
|   |   |-- header.html                 # Header general
|   |   |-- header.js                   # JS para interactividad del header
|   |   |-- header.css                  # Estilos del header (CSS)
|   |   |-- header.scss                 # Estilos del header (SCSS)
|   |
|   |-- footer/                         
|   |   |-- footer.html                 # Footer general
|   |   |-- footer.js                   # JS para interactividad del footer
|   |   |-- footer.css                  # Estilos del footer (CSS)
|   |   |-- footer.scss                 # Estilos del footer (SCSS)
|
|-- pages/                              
|   |-- register/                       
|   |   |-- register.html               # Página de registro
|   |   |-- register.css                # Estilos específicos del registro (CSS)
|   |   |-- register.scss               # Estilos específicos del registro (SCSS)
|   |   |-- register.js                 # Lógica JS para el registro
|
|   |-- login/                          
|   |   |-- login.html                  # Página de login
|   |   |-- login.css                   # Estilos específicos del login (CSS)
|   |   |-- login.scss                  # Estilos específicos del login (SCSS)
|   |   |-- login.js                    # Lógica JS para el login
|
|   |-- menu/                           
|   |   |-- menu.html                   # Página del menú principal
|   |   |-- menu.css                    # Estilos del menú (CSS)
|   |   |-- menu.scss                   # Estilos del menú (SCSS)
|   |   |-- menu.js                     # Lógica JS para el menú
|
|   |-- inversion/                       
|   |   |-- inversion.html              # Página de inversiones
|   |   |-- inversion.css               # Estilos de la sección de inversiones (CSS)
|   |   |-- inversion.scss              # Estilos de la sección de inversiones (SCSS)
|   |   |-- inversion.js                # Lógica JS para la sección de inversiones
|
|   |-- afore/                           
|   |   |-- afore.html                  # Página de Afore
|   |   |-- afore.css                   # Estilos de la sección Afore (CSS)
|   |   |-- afore.scss                  # Estilos de la sección Afore (SCSS)
|   |   |-- afore.js                    # Lógica JS para la sección Afore
|
|   |-- taxes/                           
|   |   |-- taxes.html                  # Página de impuestos
|   |   |-- taxes.css                   # Estilos de la sección de impuestos (CSS)
|   |   |-- taxes.scss                  # Estilos de la sección de impuestos (SCSS)
|   |   |-- taxes.js                    # Lógica JS para la sección de impuestos
    `)

//Taxes por su dificultad probablemente no