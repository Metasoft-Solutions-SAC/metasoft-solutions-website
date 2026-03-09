import { BaseApi } from '@/shared/infrastructure/base-api.js'
import { BaseEndpoint } from '@/shared/infrastructure/base-endpoint.js'

/**
 * WebsiteCorporateApi
 * INFRASTRUCTURE LAYER — Encapsulates all HTTP calls for the website-corporate module.
 * Extends BaseApi from shared. Uses BaseEndpoint for URI construction.
 * No fetch/axios direct calls allowed in other layers.
 */
export class WebsiteCorporateApi extends BaseApi {
  constructor() {
    super()
    this.endpoint = new BaseEndpoint(
      import.meta.env.VITE_WEBSITE_CORPORATE_ENDPOINT ?? '/website-corporate'
    )
  }

  /**
   * Get all website sections metadata from the API
   * @returns {Promise<import('axios').AxiosResponse>}
   */
  async getSections() {
    return await this.http.get(this.endpoint.resource('/sections'))
  }

  /**
   * Submit a contact/project inquiry form
   * @param {object} formData
   * @returns {Promise<import('axios').AxiosResponse>}
   */
  async submitContactForm(formData) {
    return await this.http.post(this.endpoint.resource('/contact'), formData)
  }
}
