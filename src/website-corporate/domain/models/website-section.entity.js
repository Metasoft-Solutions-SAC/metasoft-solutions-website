/**
 * WebsiteSection Entity
 * DOMAIN LAYER — Pure domain object, no Vue, no HTTP, no external deps
 */
export class WebsiteSection {
  /**
   * @param {object} params
   */
  constructor({
    id = '',
    title = '',
    subtitle = '',
    description = '',
    items = [],
    imageUrl = '',
    isVisible = true,
    order = 0,
    metadata = {}
  } = {}) {
    this.id = id
    this.title = title
    this.subtitle = subtitle
    this.description = description
    this.items = items
    this.imageUrl = imageUrl
    this.isVisible = isVisible
    this.order = order
    this.metadata = metadata
  }
}
