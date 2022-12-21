export default function guardrail(mathFunction) {
  const res = [];
  try {
    const data = mathFunction();
    res.push(data);
  } catch (e) {
    res.push(e.toString());
  }

  res.push('Guardrail was processed');
  return res;
}
