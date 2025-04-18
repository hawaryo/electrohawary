export type Json =
  | string
  | number
  | boolean
  | null
  | {[key: string]: Json | undefined}
  | Json[];

export type Database = {
  public: {
    Tables: {
      brand: {
        Row: {
          id: number;
          image: string | null;
          name: string | null;
        };
        Insert: {
          id?: number;
          image?: string | null;
          name?: string | null;
        };
        Update: {
          id?: number;
          image?: string | null;
          name?: string | null;
        };
        Relationships: [];
      };
      category: {
        Row: {
          alt: string;
          id: number;
          image_url: string;
          name: string;
        };
        Insert: {
          alt: string;
          id?: number;
          image_url: string;
          name: string;
        };
        Update: {
          alt?: string;
          id?: number;
          image_url?: string;
          name?: string;
        };
        Relationships: [];
      };
      product: {
        Row: {
          brand_id: number | null;
          category_id: number | null;
          created_at: string;
          description: string;
          features: Json | null;
          id: number;
          image_id: number;
          instock: boolean;
          meta: Json | null;
          model: string | null;
          price: number;
          sku: string | null;
          title: string;
        };
        Insert: {
          brand_id?: number | null;
          category_id?: number | null;
          created_at?: string;
          description: string;
          features?: Json | null;
          id?: number;
          image_id: number;
          instock: boolean;
          meta?: Json | null;
          model?: string | null;
          price: number;
          sku?: string | null;
          title: string;
        };
        Update: {
          brand_id?: number | null;
          category_id?: number | null;
          created_at?: string;
          description?: string;
          features?: Json | null;
          id?: number;
          image_id?: number;
          instock?: boolean;
          meta?: Json | null;
          model?: string | null;
          price?: number;
          sku?: string | null;
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "product_brand_id_fkey";
            columns: ["brand_id"];
            isOneToOne: false;
            referencedRelation: "brand";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "product_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "category";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "product_image_id_fkey";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "product_image";
            referencedColumns: ["id"];
          }
        ];
      };
      product_image: {
        Row: {
          alt: string;
          id: number;
          url: string;
        };
        Insert: {
          alt: string;
          id?: number;
          url: string;
        };
        Update: {
          alt?: string;
          id?: number;
          url?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      never: never;
    };
    Functions: {
      never: never;
    };
    Enums: {
      never: never;
    };
    CompositeTypes: {
      never: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | {schema: keyof Database},
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends {schema: keyof Database}
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
      DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
      DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | {schema: keyof Database},
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {schema: keyof Database}
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | {schema: keyof Database},
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {schema: keyof Database}
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | {schema: keyof Database},
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends {schema: keyof Database}
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | {schema: keyof Database},
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends {schema: keyof Database}
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
