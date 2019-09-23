import Link from 'next/link';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { getCookie, isAuth } from '../../actions/auth';
import { getCategories } from '../../actions/category';
import { getTags } from '../../actions/tag';
import { createBlog } from '../../actions/blog';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../../helpers/quill';

const BlogUpdate = () => {
    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <div className="col-md-8">
                    <p>create blog form</p>
                    <div className="pt-3">
                        <p>show success and error msg</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div>
                        <div className="form-group pb-2">
                            <h5>Featured image</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogUpdate;
