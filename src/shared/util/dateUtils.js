export function formatarData(data) {
  if (!data) return '';
  const d = new Date(data);
  return isNaN(d.getTime()) ? data : d.toLocaleDateString('pt-BR');
}