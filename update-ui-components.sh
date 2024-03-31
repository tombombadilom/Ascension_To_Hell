#!/usr/bin/env bash

# Recherche récursive de la chaîne "@/components/ui" dans tous les fichiers sous src/
# Extraction des noms des composants sans les caractères ";" en fin de ligne
# Elimination des doublons
components=$(grep -rhi "@/components/ui" ./src/ | \
sed -n 's/.*@\/components\/ui\/\([^"]*\).*/\1/p' | \
sed 's/;$//' | \
awk -F'/' '{print $NF}' | \
sort | uniq
)

# dans le cas ou un component s'appelle toaster , remplace le par toast
# Check if 'toaster' is in the list and replace it with 'toast'
if echo "$components" | grep -qw "toaster"; then
  components=$(echo "$components" | sed 's/\btoaster\b/toast/')
fi

# Joindre les composants séparés par des espaces
unique_components=$(echo $components | tr '\n' ' '| sed "s/'//g")

# Construire et afficher la commande pnpm dlx
pnpm_command="pnpm dlx shadcn-ui@latest add $unique_components --overwrite"
echo "Exécution de la commande : $pnpm_command"

# Exécuter la commande
eval "$pnpm_command"
