**Props disponibles**:

| Prop | Tipo | Default | Requerido | Descripción |
|------|------|---------|-----------|-------------|
| `effectElement` | `string` \| `React.ReactNode` | - | ✅ | Elemento visual para las partículas (URL, SVG string o elemento React) |
| `visible` | `boolean` | - | ✅ | Controla la visibilidad del efecto |
| `effectType` | `'snow'` \| `'confetti'` \| `'leaves'` \| `'rain'` \| `'stars'` | `'snow'` | ❌ | Tipo de efecto y comportamiento de las partículas |
| `particleCount` | `number` | `50` | ❌ | Cantidad de partículas a renderizar |
| `speed` | `number` | `1` | ❌ | Velocidad general de caída (0.1 - 2) |
| `wind` | `number` | `0` | ❌ | Dirección del viento (-1 = izquierda, 1 = derecha) |
| `minSize` | `number` | `10` | ❌ | Tamaño mínimo de partícula en píxeles |
| `maxSize` | `number` | `30` | ❌ | Tamaño máximo de partícula en píxeles |
| `primaryColor` | `string` | `'#ffffff'` | ❌ | Color dominante (solo para confeti) |
| `className` | `string` | `''` | ❌ | Clases CSS adicionales para el contenedor |