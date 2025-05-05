export type Json = string | number | boolean | {[key: string]: Json | undefined} | Json[];

export type Database = {
  public: {
    Tables: {
      attribute_name: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      attribute_value: {
        Row: {
          attribute_name_id: number | null;
          id: number;
          value: string | null;
        };
        Insert: {
          attribute_name_id?: number | null;
          id?: number;
          value?: string | null;
        };
        Update: {
          attribute_name_id?: number | null;
          id?: number;
          value?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "attribute_value_attribute_name_id_fkey";
            columns: ["attribute_name_id"];
            isOneToOne: false;
            referencedRelation: "attribute_name";
            referencedColumns: ["id"];
          }
        ];
      };
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
          alt?: string;
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
          brand_id: number;
          category_id: number | null;
          created_at: string;
          description: string;
          features: string[];
          id: number;
          image_id: number | null;
          instock: boolean | null;
          meta: Json | null;
          model: string | null;
          price: number | null;
          sku: string | null;
          title: string;
        };
        Insert: {
          brand_id: number;
          category_id?: number | null;
          created_at?: string;
          description: string;
          features: Json;
          id?: number;
          image_id?: number | null;
          instock?: boolean | null;
          meta?: Json | null;
          model?: string | null;
          price?: number | null;
          sku?: string | null;
          title: string;
        };
        Update: {
          brand_id?: number;
          category_id?: number | null;
          created_at?: string;
          description?: string;
          features?: Json;
          id?: number;
          image_id?: number | null;
          instock?: boolean | null;
          meta?: Json | null;
          model?: string | null;
          price?: number | null;
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
      sub_category: {
        Row: {
          id: number;
          name: string | null;
          parent_id: number;
        };
        Insert: {
          id?: number;
          name?: string | null;
          parent_id: number;
        };
        Update: {
          id?: number;
          name?: string | null;
          parent_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "sub_category_parent_id_fkey";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "category";
            referencedColumns: ["id"];
          }
        ];
      };
      variant: {
        Row: {
          brand_id: number | null;
          category_id: number | null;
          description: string | null;
          features: string[] | null;
          id: number;
          image_id: number;
          instock: boolean | null;
          meta: Json | null;
          model: string | null;
          parent_id: number;
          price: number;
          sku: string | null;
          title: string | null;
        };
        Insert: {
          brand_id?: number | null;
          category_id?: number | null;
          description?: string | null;
          features?: Json | null;
          id?: number;
          image_id: number;
          instock?: boolean | null;
          meta?: Json | null;
          model?: string | null;
          parent_id: number;
          price: number;
          sku?: string | null;
          title?: string | null;
        };
        Update: {
          brand_id?: number | null;
          category_id?: number | null;
          description?: string | null;
          features?: Json | null;
          id?: number;
          image_id?: number;
          instock?: boolean | null;
          meta?: Json | null;
          model?: string | null;
          parent_id?: number;
          price?: number;
          sku?: string | null;
          title?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "variant_brand_id_fkey";
            columns: ["brand_id"];
            isOneToOne: false;
            referencedRelation: "brand";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "variant_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "category";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "variant_image_id_fkey";
            columns: ["image_id"];
            isOneToOne: false;
            referencedRelation: "product_image";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "variant_parent_id_fkey";
            columns: ["parent_id"];
            isOneToOne: false;
            referencedRelation: "product";
            referencedColumns: ["id"];
          }
        ];
      };
      variant_attribute_value_mapping: {
        Row: {
          attribute_value_id: number;
          id: number;
          variant_id: number;
        };
        Insert: {
          attribute_value_id: number;
          id?: number;
          variant_id: number;
        };
        Update: {
          attribute_value_id?: number;
          id?: number;
          variant_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "variant_attribute_value_mapping_attribute_value_id_fkey";
            columns: ["attribute_value_id"];
            isOneToOne: false;
            referencedRelation: "attribute_value";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "variant_attribute_value_mapping_variant_id_fkey";
            columns: ["variant_id"];
            isOneToOne: false;
            referencedRelation: "variant";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      never: never;
    };
    Functions: {
      get_product_variant_attributes: {
        Args: {in_product_id: number};
        Returns: {
          [attributeName: string]: string[];
        };
      };
      get_products_with_variant: {
        Args: {in_category_name: string};
        Returns: {
          id: number;
          product_title: string;
          image_url: string;
          image_alt: string;
          price: number;
          attributes: {
            [key: string]: {
              value: string | number;
              variant_id: number;
            }[];
          } | null;
        }[];
      };
      get_variant_by_attributes: {
        Args: {
          in_product_id: number;
          in_attribute_name: string;
          in_attribute_value: string;
        };
        Returns: {
          variant_id: number;
          title: string;
          price: number;
          sku: string;
          features: string[];
          description: string;
          instock: boolean;
          model: string;
          meta: Json;
          category_name: string;
          brand_name: string;
          image_url: string;
          image_alt: string;
        }[];
      };
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
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | {schema: keyof Database},
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
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | {schema: keyof Database},
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
  DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"] | {schema: keyof Database},
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
  PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"] | {schema: keyof Database},
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
