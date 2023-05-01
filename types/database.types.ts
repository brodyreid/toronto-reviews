export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      reviews: {
        Row: {
          author: string
          body: string
          created_at: string
          id: number
          rating: number
          restaurant: string
        }
        Insert: {
          author: string
          body: string
          created_at?: string
          id?: number
          rating: number
          restaurant: string
        }
        Update: {
          author?: string
          body?: string
          created_at?: string
          id?: number
          rating?: number
          restaurant?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
