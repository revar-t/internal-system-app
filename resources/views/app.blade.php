<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>AdvanceDX</title>

    @viteReactRefresh
    @vite('resources/ts/App.tsx')
</head>
<body class="antialiased bg-gray-50">
    <div id="app"></div>
</body>
</html>
