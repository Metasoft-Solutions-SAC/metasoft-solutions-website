import { WebsiteSection } from '../domain/models/website-section.entity.js'

/**
 * WebsiteSectionAssembler
 * INFRASTRUCTURE LAYER — Transforms raw API resources into domain entities
 */
export class WebsiteSectionAssembler {
  /**
   * Transforms a single raw resource into a WebsiteSection entity
   * @param {object} resource - Raw API resource
   * @returns {WebsiteSection}
   */
  static toEntityFromResource(resource) {
    if (!resource || typeof resource !== 'object') {
      return new WebsiteSection()
    }

    return new WebsiteSection({
      id:          resource.id          ?? '',
      title:       resource.title       ?? '',
      subtitle:    resource.subtitle    ?? '',
      description: resource.description ?? '',
      items:       Array.isArray(resource.items) ? resource.items : [],
      imageUrl:    resource.image_url   ?? resource.imageUrl ?? '',
      isVisible:   resource.is_visible  ?? resource.isVisible ?? true,
      order:       resource.order       ?? 0,
      metadata:    resource.metadata    ?? {}
    })
  }

  /**
   * Transforms an HTTP response object into an array of WebsiteSection entities
   * Validates that response.status === 200
   * @param {object} response - Axios-style response object { status, data }
   * @returns {WebsiteSection[]}
   */
  static toEntitiesFromResponse(response) {
    if (!response || response.status !== 200) {
      console.warn('[WebsiteSectionAssembler] Invalid response or non-200 status', response?.status)
      return []
    }

    const data = response.data

    if (!Array.isArray(data)) {
      // Handle single object response
      if (data && typeof data === 'object') {
        return [WebsiteSectionAssembler.toEntityFromResource(data)]
      }
      return []
    }

    return data.map(resource => WebsiteSectionAssembler.toEntityFromResource(resource))
  }
}
