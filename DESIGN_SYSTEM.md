# Servelink Design System

## Vue d'ensemble

Ce document décrit le système de design utilisé pour la plateforme Servelink. Il sert de référence pour maintenir la cohérence visuelle et fonctionnelle à travers toute l'application.

## Palette de couleurs

### Couleurs principales
- **Purple** : `purple-600`, `purple-500`, `purple-100` - Couleur principale de la marque
- **Blue** : `blue-600`, `blue-500`, `blue-100` - Couleur secondaire
- **Gray** : `gray-900`, `gray-700`, `gray-600`, `gray-500`, `gray-200` - Texte et bordures

### Couleurs d'état
- **Success** : `green-600`, `green-100`
- **Warning** : `yellow-600`, `yellow-100`
- **Error** : `red-600`, `red-100`
- **Info** : `blue-600`, `blue-100`

## Typographie

### Hiérarchie des titres
```tsx
// H1 - Page principale
<h1 className="text-4xl font-bold text-gray-900 md:text-5xl mb-6">

// H2 - Sections principales
<h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">

// H3 - Sous-sections
<h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">

// H4 - Éléments de contenu
<h4 className="font-semibold text-gray-900 mb-3">
```

### Corps de texte
```tsx
// Texte principal
<p className="text-lg text-gray-700 leading-relaxed mb-6">

// Texte secondaire
<p className="text-gray-600 mb-4">

// Texte petit
<p className="text-sm text-gray-500">
```

## Composants de base

### Boutons

#### Bouton principal (CTA)
```tsx
<a
  href="/pricing"
  className="btn bg-linear-to-t from-purple-600 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
>
  Start Free Trial
</a>
```

#### Bouton secondaire
```tsx
<a
  href="/features"
  className="btn bg-white text-gray-900 shadow-sm border border-gray-200 hover:bg-gray-50"
>
  Learn More
</a>
```

#### Bouton avec icône
```tsx
<span className="relative inline-flex items-center">
  Start Free Trial{" "}
  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
    -&gt;
  </span>
</span>
```

### Badges et étiquettes

#### Badge de statut
```tsx
<div className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 text-sm font-medium text-purple-800 shadow-sm">
  <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
  Served on Servelink
</div>
```

#### Tags technologiques
```tsx
<span className="inline-block rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-800">Laravel</span>
<span className="inline-block rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">PHP</span>
<span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">Python</span>
```

### Cartes et conteneurs

#### Carte d'article de blog
```tsx
<article className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
  <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
    <div className="text-center">
      <div className="text-4xl mb-2">🚀</div>
      <div className="text-sm font-medium text-purple-700">Laravel</div>
    </div>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors">
      Titre de l'article
    </h3>
    <p className="mt-2 text-gray-600">
      Description de l'article...
    </p>
  </div>
</article>
```

#### Carte d'information
```tsx
<div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
  <h4 className="font-semibold text-blue-900 mb-3">Titre</h4>
  <p className="text-sm text-blue-800">Contenu...</p>
</div>
```

#### Carte d'alerte
```tsx
<div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.725-1.36 3.49 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <p className="text-sm text-red-700">
        <strong>Message d'alerte :</strong> Description du problème...
      </p>
    </div>
  </div>
</div>
```

### Formulaires

#### Input standard
```tsx
<div>
  <label
    className="mb-1 block text-sm font-medium text-gray-700"
    htmlFor="field-name"
  >
    Label du champ
  </label>
  <input
    id="field-name"
    className="form-input w-full py-2"
    type="text"
    placeholder="Placeholder"
    required
  />
</div>
```

#### Textarea
```tsx
<div>
  <label
    className="mb-1 block text-sm font-medium text-gray-700"
    htmlFor="message"
  >
    Message
  </label>
  <textarea
    id="message"
    className="form-input w-full py-2"
    rows={4}
    placeholder="Votre message..."
    required
  />
</div>
```

#### Select
```tsx
<div>
  <label
    className="mb-1 block text-sm font-medium text-gray-700"
    htmlFor="framework"
  >
    Framework
  </label>
  <select
    id="framework"
    className="form-input w-full py-2"
    required
  >
    <option value="">Sélectionnez un framework</option>
    <option value="laravel">Laravel</option>
    <option value="python">Python</option>
    <option value="nodejs">Node.js</option>
  </select>
</div>
```

### Layout et structure

#### Container principal
```tsx
<div className="mx-auto max-w-4xl px-4 sm:px-6">
  {/* Contenu */}
</div>
```

#### Section avec espacement
```tsx
<section className="py-32">
  <div className="mx-auto max-w-4xl px-4 sm:px-6">
    {/* Contenu de la section */}
  </div>
</section>
```

#### Grille responsive
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Éléments de la grille */}
</div>
```

### Code et exemples

#### Bloc de code
```tsx
<div className="bg-gray-900 rounded-lg p-6 mb-6">
  <div className="flex items-center mb-4">
    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
    <span className="text-gray-400 text-sm ml-4">filename.js</span>
  </div>
  <pre className="text-green-400 text-sm">
    <code>{`// Code example here`}</code>
  </pre>
</div>
```

#### Code inline
```tsx
<code className="bg-gray-100 px-2 py-1 rounded text-sm">code example</code>
```

### Navigation et liens

#### Lien de navigation
```tsx
<a href="/blog" className="hover:text-yellow-600">← Back to Blog</a>
```

#### Lien avec icône
```tsx
<a href="/pricing" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
  Read more →
</a>
```

### Auteurs et métadonnées

#### Carte d'auteur
```tsx
<div className="flex items-center mb-12 p-6 bg-gray-50 rounded-lg">
  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
    <span className="text-purple-600 font-semibold">AB</span>
  </div>
  <div>
    <div className="font-semibold text-gray-900">Nom de l'auteur</div>
    <div className="text-sm text-gray-600">Titre @ Servelink</div>
  </div>
</div>
```

#### Métadonnées d'article
```tsx
<div className="flex items-center text-sm text-gray-500 mb-4">
  <span>December 15, 2024</span>
  <span className="mx-2">•</span>
  <span>8 min read</span>
</div>
```

### États vides

#### État vide avec action
```tsx
<div className="mt-20">
  <div className="rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
      <svg className="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900">No open positions</h3>
    <p className="mt-2 text-gray-600">
      Message d'état vide...
    </p>
    <div className="mt-6">
      <a
        href="mailto:careers@servel.ink"
        className="btn bg-linear-to-t from-purple-600 to-purple-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%]"
      >
        Action Button
      </a>
    </div>
  </div>
</div>
```

## Patterns de contenu

### Structure d'article de blog
```tsx
export default function BlogPost() {
  return (
    <article className="py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header avec métadonnées */}
        <div className="mb-12">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <a href="/blog" className="hover:text-yellow-600">← Back to Blog</a>
            <span className="mx-2">•</span>
            <span>Date</span>
            <span className="mx-2">•</span>
            <span>X min read</span>
          </div>
          
          <div className="flex items-center space-x-2 mb-4">
            <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800">Tag</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl mb-6">
            Titre de l'article
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Description de l'article...
          </p>
        </div>

        {/* Auteur */}
        <div className="flex items-center mb-12 p-6 bg-gray-50 rounded-lg">
          {/* Carte d'auteur */}
        </div>

        {/* Contenu principal */}
        <div className="prose prose-lg max-w-none">
          {/* Contenu de l'article */}
        </div>

        {/* Bio de l'auteur */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          {/* Bio complète */}
        </div>
      </div>
    </article>
  );
}
```

### Structure de page standard
```tsx
export default function Page() {
  return (
    <div className="py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Titre de la page
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Description de la page...
        </p>
        
        {/* Contenu de la page */}
      </div>
    </div>
  );
}
```

## Règles d'utilisation

### Espacement
- Utiliser `py-32` pour les sections principales
- Utiliser `mb-6`, `mb-8`, `mb-12` pour les espacements entre éléments
- Utiliser `mt-12` pour les séparations de sections

### Responsive
- Toujours prévoir les breakpoints `md:` et `lg:`
- Utiliser `mx-auto max-w-4xl px-4 sm:px-6` pour les conteneurs
- Utiliser `grid md:grid-cols-2 lg:grid-cols-3` pour les grilles

### Couleurs
- Purple pour les éléments principaux et la marque
- Blue pour les éléments secondaires
- Gray pour le texte et les bordures
- Couleurs d'état pour les messages (success, warning, error, info)

### Interactions
- Toujours prévoir les états hover
- Utiliser `transition-colors` et `transition-shadow` pour les animations
- Utiliser `hover:shadow-lg` pour les cartes

Ce système de design assure la cohérence visuelle et fonctionnelle de toute la plateforme Servelink.
