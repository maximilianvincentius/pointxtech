export interface ContactPayload {
  name: string
  email: string
  phone?: string
  message: string
  access_key?: string
}

export interface ContactResponse {
  success: boolean
  error?: string
}

/**
 * Send contact form submission to configured API endpoint.
 * Backend handles email delivery — frontend never touches SMTP creds.
 * Set VITE_CONTACT_API_URL in .env (Formspree, serverless fn, etc.)
 */
export async function submitContact(payload: ContactPayload): Promise<ContactResponse> {
  const apiUrl = import.meta.env.VITE_CONTACT_API_URL as string | undefined
  const apiKey = import.meta.env.VITE_CONTACT_API_KEY as string | undefined

  payload = { ...payload, access_key: apiKey };

  if (!apiUrl) {
    // ponytail: no backend configured — log only, upgrade when endpoint added
    console.warn('[contact] VITE_CONTACT_API_URL not set. Submission logged only.')
    console.log('[contact] payload:', payload)
    return { success: true }
  }

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    const text = await res.text().catch(() => '')
    return { success: false, error: text || `Request failed (${res.status})` }
  }

  return { success: true }
}