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
      user_roles: {
        Row: {
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Insert: {
          role: Database["public"]["Enums"]["user_role"]
          user_id: string
        }
        Update: {
          role?: Database["public"]["Enums"]["user_role"]
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          name: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      user_role: "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
