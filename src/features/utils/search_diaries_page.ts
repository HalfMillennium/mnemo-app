export const MNEMOSYNE_BLURB =
  'In the realms of ancient Greek mythology, MNEMOSYNE emerges as the ethereal embodiment of memory and remembrance. Revered as the daughter of Gaia, the Earth, and Uranus, the Sky, she is the mother of the nine Muses, those divine inspirations of art and science. Mnemosyne\'s essence flows like a sacred river, bestowing upon mortals the gift of recollection and the power to weave tales that transcend time. Her name itself, meaning "memory" in Greek, hints at the profound significance she held in the pantheon of gods.';

export function stripEntityName(entityName: string): string {
  return entityName.trim().replace(/\s/g, "_").toLowerCase();
}

export const GENERIC_ERROR_TEXT = "Sorry! Something went wrong.";
